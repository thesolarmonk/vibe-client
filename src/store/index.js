import Vue from "vue";
import Vuex from "vuex";

import { setCookie } from "../js/helper.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false,
    access_token: "",

    user_id: "",
    user_name: "",
    profile_pic_url: "",

    player: null,
    player_id: null,
    playing: false,

    feed: null,
    current_feed_index: null
  },
  getters: {
    isAuthenticated: state => {
      return state.authenticated;
    },
    getUserId: state => {
      return state.user_id;
    },
    getUserName: state => {
      return state.user_name;
    },
    getProfilePic: state => {
      return state.profile_pic_url;
    },
    isPlaying: state => {
      return state.playing;
    },
    feed: state => {
      return state.feed;
    },
    currentTrack: state => {
      if (state.current_feed_index != null) {
        return {
          name: state.feed[state.current_feed_index].track.track_name,
          id: state.feed[state.current_feed_index].track.track_id,
          artist: state.feed[state.current_feed_index].track.artist_name,
          user_name: state.feed[state.current_feed_index].user.user_name
        };
      } else {
        return {};
      }
    },
    currentFeedIndex: state => {
      return state.current_feed_index;
    },
    accessToken: state => {
      return state.access_token;
    },
    currentSentiment: state => {
      if (state.current_feed_index == null) {
        return "mood-0";
      }

      let sentiment_score = Math.floor(
        state.feed[state.current_feed_index].track.sentiment_score * 100
      );
      if (sentiment_score < 15) {
        return "mood-1";
      } else if (sentiment_score >= 15 && sentiment_score < 30) {
        return "mood-2";
      } else if (sentiment_score >= 30 && sentiment_score < 50) {
        return "mood-3";
      } else if (sentiment_score >= 50) {
        return "mood-4";
      }
    }
  },
  mutations: {
    login(state, payload) {
      state.authenticated = true;
      state.access_token = payload.access_token;
      state.user_id = payload.user_id;
      state.user_name = payload.user_name;
      state.profile_pic_url = payload.profile_pic_url;

      let cookie = {
        access_token: state.access_token,
        user_id: state.user_id,
        user_name: state.user_name,
        profile_pic_url: state.profile_pic_url
      };

      setCookie("vibe_auth", JSON.stringify(cookie), 0.041666667);
    },
    logout(state) {
      state.authenticated = false;
      state.access_token = "";
      state.user_id = "";
      state.user_name = "";
      document.cookie =
        "vibe_auth" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    play(state) {
      state.playing = true;
    },
    pause(state) {
      state.playing = false;
    },
    setFeed(state, feed) {
      state.feed = feed;
    },
    setCurrentFeedIndex(state, current_track_id) {
      console.log("looking");
      state.feed.forEach((post, i) => {
        if (current_track_id == post.track.track_id) {
          console.log("found");
          post.playing = true;
          state.current_feed_index = i;
        } else {
          post.playing = false;
        }
      });
    }
  },
  actions: {
    login: ({ commit, state }, payload) => {
      fetch(`${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${payload.access_token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          let profile_pic_url = "";
          if (data.images === undefined)
            profile_pic_url =
              "https://www.betterengineering.com/wp-content/uploads/2015/06/blue-gradient-background-flip.jpg";
          else profile_pic_url = data.images[0].url;
          let body = JSON.stringify({
            user_id: data.id,
            user_name: data.display_name,
            profile_pic_url: profile_pic_url,
            auth_token: state.access_token
          });
          console.log(body);
          fetch(`${process.env.VUE_APP_VIBE_API_URL}/api/users`, {
            method: "PUT",
            body: body,
            headers: {
              "content-type": "application/json"
            }
          }).then(response => console.log(response));

          payload.user_id = data.id;
          payload.user_name = data.display_name;
          payload.profile_pic_url = profile_pic_url;
          commit("login", payload);
        })
        .catch(err => {
          console.log(err);
        });
    },
    play: ({ commit, state }, payload) => {
      let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/play?device_id=${state.player_id}`;
      let body = null;

      if (payload.feed_index !== null) {
        let feed_uris = state.feed.map(
          post => `spotify:track:${post.track.track_id}`
        );
        body = JSON.stringify({
          uris: feed_uris,
          offset: {
            position: payload.feed_index
          }
        });
      } else {
        body = null;
      }

      // console.log('test ' + state.player_id);

      fetch(url, {
        method: "PUT",
        body: body,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.access_token}`
        }
      })
        .then(response => {
          if (response.status == 204) commit("play");
        })
        .catch(err => {
          console.log(err);
        });
    },
    pause: ({ commit, state }) => {
      let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/pause?device_id=${state.player_id}`;

      fetch(url, {
        method: "PUT",
        body: null,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.access_token}`
        }
      })
        .then(response => {
          if (response.status == 204) commit("pause");
        })
        .catch(err => {
          console.log(err);
        });
    },
    skip: ({ commit, state }, payload) => {
      let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/${payload.skip}?device_id=${state.player_id}`;

      fetch(url, {
        method: "POST",
        body: null,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.access_token}`
        }
      })
        .then(response => {
          if (response.status == 204) commit("play");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});

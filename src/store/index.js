import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false,
    access_token: '',

    user_id: '',
    user_name: '',

    player: null,
    player_id: null,
    playing: false,

    feed: [
      {
        playing: false,
        user_id: 'nikhil',
        user_name: 'Nikhil',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.8,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b273521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00004851521689e65df1695ceca59795'
              }
            ]
          },
          name: 'Habits',
          artist: 'Shallou',
          id: '1OCrb7dmygmJiDcjdFAPR8'
        }
      },
      {
        playing: false,
        user_id: 'test2',
        user_name: 'Tanuj',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.3,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/a05aab098048cc7b4e448cd16d1d85cfa1720d21'
              },
              {
                url:
                  'https://i.scdn.co/image/29b738388af610314181ceae4521c872801af6ac'
              },
              {
                url:
                  'https://i.scdn.co/image/64bdae2ffc7ad4cbd385615170fd576316c3155d'
              }
            ]
          },
          name: 'I Wish I Never Met You',
          artists: [
            {
              name: 'Oh Wonder'
            }
          ],
          id: '4P6Y4uhdy4Z9W9WUdCjt8l'
        }
      },
      {
        playing: false,
        user_id: 'test4',
        user_name: 'Nihar',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b2739d3ad3a9fa90bf0dee0ae5be'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e029d3ad3a9fa90bf0dee0ae5be'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d000048519d3ad3a9fa90bf0dee0ae5be'
              }
            ]
          },
          name: 'Makeba',
          artist: 'Jain',
          id: '5JdLUE9D743ob2RtgmVpVx'
        }
      },
      {
        playing: false,
        user_id: 'test5',
        user_name: 'David',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b273da45750734ba67831abf4f76'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02da45750734ba67831abf4f76'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00004851da45750734ba67831abf4f76'
              }
            ]
          },
          name: "6's to 9's (feat. Rationale)",
          artist: 'Big Wild',
          id: '4DAaQ5InUO23d8yNRbB0Yj'
        }
      },
      {
        playing: false,
        user_id: 'test6',
        user_name: 'Sophie',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b27350fd96bb9e4c5a3fdd4496bc'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e0250fd96bb9e4c5a3fdd4496bc'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000485150fd96bb9e4c5a3fdd4496bc'
              }
            ]
          },
          name: 'anemone',
          artist: 'slenderbodies',
          id: '1MD2yGSeBRALkMui1fZ05P'
        }
      },
      {
        playing: false,
        user_id: 'nikhil',
        user_name: 'Nikhil',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b27363f4e8a0bd5f2aac711a50fd'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e0263f4e8a0bd5f2aac711a50fd'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000485163f4e8a0bd5f2aac711a50fd'
              }
            ]
          },
          name: 'World On Fire',
          artist: 'Louis the Child',
          id: '22wcNdDej7sJO0UnaerFN7'
        }
      },
      {
        playing: false,
        user_id: 'test6',
        user_name: 'David',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/c6a2c025f8c433ef980b7c416f4b873c2872fa0f'
              },
              {
                url:
                  'https://i.scdn.co/image/9f2b07060668c86f3ed8355c0f61a87089a2022a'
              },
              {
                url:
                  'https://i.scdn.co/image/32a3dc4fdbecc950ce8bde1001fcd1d43bba074f'
              }
            ]
          },
          name: 'I Wanna Dance With Somebody',
          artist: 'Marian Hill',
          id: '4z9WXbp9oQxnRtmBV8bh5X'
        }
      },
      {
        playing: false,
        user_id: 'test8',
        user_name: 'Sophie',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b273c84f9009bb5cdeb4039e2eca'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02c84f9009bb5cdeb4039e2eca'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00004851c84f9009bb5cdeb4039e2eca'
              }
            ]
          },
          name: 'Paspatou',
          artist: 'Parra for Cuva',
          id: '4NpPKFIQXU3ZrlcG7T6PTT'
        }
      }
    ],
    current_feed_index: null
    // current_feed_length: 2
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
    isPlaying: state => {
      return state.playing;
    },
    feed: state => {
      return state.feed;
    },
    currentTrack: state => {
      if (state.current_feed_index != null) {
        return {
          name: state.feed[state.current_feed_index].track.name,
          id: state.feed[state.current_feed_index].track.id,
          artist: state.feed[state.current_feed_index].track.artist,
          user_name: state.feed[state.current_feed_index].user_name
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
        return 'none';
      }

      let sentiment_score =
        state.feed[state.current_feed_index].track.sentiment_score;
      if (sentiment_score >= 0.5) {
        return 'happy';
      } else {
        return 'sad';
      }
    }
  },
  mutations: {
    login(state, payload) {
      state.authenticated = true;
      state.access_token = payload.access_token;
      state.user_id = payload.user_id;
      state.user_name = payload.user_name;
    },
    logout(state) {
      state.authenticated = false;
      state.access_token = '';
      state.user_id = '';
      state.user_name = '';
      document.cookie =
        'vibe_auth' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    play(state) {
      state.playing = true;
    },
    pause(state) {
      state.playing = false;
    },
    setCurrentFeedIndex(state, current_track_id) {
      state.feed.forEach((post, i) => {
        if (current_track_id == post.track.id) {
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
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${payload.access_token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          let body = JSON.stringify({
            user_id: data.id,
            user_name: data.display_name,
            profile_pic_url: data.images[0].url,
            auth_token: state.access_token
          });
          console.log(body);
          fetch(`${process.env.VUE_APP_VIBE_API_URL}/api/users`, {
            method: 'PUT',
            body: body,
            headers: {
              'content-type': 'application/json'
            }
          }).then(response => response.json());

          payload.user_id = data.id;
          payload.user_name = data.display_name;
          commit('login', payload);
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
          post => `spotify:track:${post.track.id}`
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

      fetch(url, {
        method: 'PUT',
        body: body,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.access_token}`
        }
      })
        .then(response => {
          if (response.status == 204) commit('play');
        })
        .catch(err => {
          console.log(err);
        });
    },
    pause: ({ commit, state }) => {
      let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/pause?device_id=${state.player_id}`;

      fetch(url, {
        method: 'PUT',
        body: null,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.access_token}`
        }
      })
        .then(response => {
          if (response.status == 204) commit('pause');
        })
        .catch(err => {
          console.log(err);
        });
    },
    skip: ({ commit, state }, payload) => {
      let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/${payload.skip}?device_id=${state.player_id}`;

      fetch(url, {
        method: 'POST',
        body: null,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.access_token}`
        }
      })
        .then(response => {
          if (response.status == 204) commit('play');
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});

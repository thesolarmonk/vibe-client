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
        user_id: 'tanujlalwani',
        user_name: 'Tanuj Lalwani',
        date_posted: 1573701139111,
        track: {
          sentiment_score: 0.8,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e022fc97d8b44d992db41922534'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e022fc97d8b44d992db41922534'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e022fc97d8b44d992db41922534'
              }
            ]
          },
          name: 'placeholder',
          artist: 'Hand Habits',
          id: '6ABQcgTtAPCUyMkVwdRNJo'
        }
      },
      {
        playing: false,
        user_id: 'nikhilbhatia',
        user_name: 'Nikhil Bhatia',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
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
        user_id: 'nikhilbhatia',
        user_name: 'Nikhil Bhatia',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
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
        user_id: 'nikhilbhatia',
        user_name: 'Nikhil Bhatia',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
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
        user_id: 'nikhilbhatia',
        user_name: 'Nikhil Bhatia',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
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
        user_id: 'nikhilbhatia',
        user_name: 'Nikhil Bhatia',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
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
        user_id: 'nikhilbhatia',
        user_name: 'Nikhil Bhatia',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
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
        user_id: 'nikhilbhatia',
        user_name: 'Nikhil Bhatia',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
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
        user_id: 'nikhilbhatia',
        user_name: 'Nikhil Bhatia',
        date_posted: 1573708975208,
        track: {
          sentiment_score: 0.5,
          album: {
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              },
              {
                url:
                  'https://i.scdn.co/image/ab67616d00001e02521689e65df1695ceca59795'
              }
            ]
          },
          name: 'Habits',
          artist: 'Shallou',
          id: '1OCrb7dmygmJiDcjdFAPR8'
        }
      }
    ],
    current_feed_index: null,
    current_feed_length: 2
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
        console.log(state.feed[state.current_feed_index]);
        return {
          name: state.feed[state.current_feed_index].track.name,
          id: state.feed[state.current_feed_index].track.id,
          artist: state.feed[state.current_feed_index].track.artist
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
    setCurrentFeedIndex(state, index) {
      state.current_feed_index = index;
    }
  },
  actions: {
    login: ({ commit }, payload) => {
      fetch(`${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${payload.access_token}`
        }
      })
        .then(response => response.json())
        .then(data => {
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

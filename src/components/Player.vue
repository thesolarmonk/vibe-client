<template>
  <div class="player">
    <p v-if="getCurrentTrack.name != null" class="player--info">
      {{ getCurrentTrack.name }} • {{ getCurrentTrack.artist }}
    </p>
    <button
      class="player--button"
      @click="
        skip({
          player_id: getPlayerId,
          access_token: getAccessToken,
          skip: 'previous'
        })
      "
    >
      Previous
    </button>
    <button
      class="player--button"
      @click="
        play({
          player_id: getPlayerId,
          access_token: getAccessToken
        })
      "
    >
      Play
    </button>
    <button
      class="player--button"
      @click="
        pause({
          player_id: getPlayerId,
          access_token: getAccessToken
        })
      "
    >
      Pause
    </button>
    <button
      class="player--button"
      @click="
        skip({
          player_id: getPlayerId,
          access_token: getAccessToken,
          skip: 'next'
        })
      "
    >
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'player',
  mounted() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.$store.state.player = new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => {
          cb(this.$store.state.access_token);
        },
        volume: 1
      });

      // Error handling
      this.$store.state.player.addListener(
        'initialization_error',
        ({ message }) => {
          console.error(message);
        }
      );
      this.$store.state.player.addListener(
        'authentication_error',
        ({ message }) => {
          console.error(message);
        }
      );
      this.$store.state.player.addListener('account_error', ({ message }) => {
        console.error(message);
      });
      this.$store.state.player.addListener('playback_error', ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      this.$store.state.player.addListener('player_state_changed', state => {
        // console.log(state);
        // console.log(state.track_window.current_track);
        if (state.paused) {
          this.setPause();
        } else {
          this.setPlay({
            name: state.track_window.current_track.name,
            id: state.track_window.current_track.id,
            artist: state.track_window.current_track.artists[0].name
          });
        }
      });

      // Ready
      this.$store.state.player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.$store.state.player_id = device_id;
      });

      // Not Ready
      this.$store.state.player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the player!
      this.$store.state.player.connect().then(success => {
        if (success) {
          console.log(
            'The Web Playback SDK successfully connected to Spotify!'
          );
        }
      });
    };

    let spotifyWebplaybackSDK = document.createElement('script');
    spotifyWebplaybackSDK.setAttribute(
      'src',
      'https://sdk.scdn.co/spotify-player.js'
    );
    document.head.appendChild(spotifyWebplaybackSDK);
  },
  computed: {
    ...mapGetters(['getAccessToken', 'getPlayerId', 'getCurrentTrack'])
  },
  methods: {
    ...mapActions(['play', 'pause', 'skip']),
    ...mapMutations({
      setPlay: 'play',
      setPause: 'pause'
    })
  }
};
</script>

<style>
.player {
  background-color: black;
}

.player--info {
  color: white;
}
</style>

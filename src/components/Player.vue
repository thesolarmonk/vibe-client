<template>
  <nav
    class="navbar is-fixed-bottom is-black is-spaced player"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-menu is-active">
      <div class="navbar-start">
        <div class="buttons is-centered">
          <a
            class="button is-black"
            @click="skip({ player_id: getPlayerId, access_token: getAccessToken, skip: 'previous'})"
          >
            <span class="icon is-large">
              <i class="fas fa-lg fa-backward"></i>
            </span>
          </a>
          <a
            v-if="isPlaying"
            class="button is-black"
            @click="pause({ player_id: getPlayerId, access_token: getAccessToken})"
          >
            <span class="icon is-large">
              <i class="fas fa-3x fa-pause-circle"></i>
            </span>
          </a>
          <a v-else class="button is-black">
            <span
              class="icon is-large"
              @click="play({ player_id: getPlayerId, access_token: getAccessToken })"
            >
              <i class="fas fa-3x fa-play-circle"></i>
            </span>
          </a>

          <a
            class="button is-black"
            @click="skip({ player_id: getPlayerId, access_token: getAccessToken, skip: 'next'})"
          >
            <span class="icon is-large">
              <i class="fas fa-lg fa-forward"></i>
            </span>
          </a>
        </div>
      </div>

      <div class="navbar-middle">
        <p v-if="getCurrentTrack.name != null" class="player--info">
          <strong>{{ getCurrentTrack.name }}</strong>
          <br />
          {{ getCurrentTrack.artist }}
        </p>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/feed" class="button is-black">
              <span class="icon is-large">
                <i class="fas fa-2x fa-dot-circle"></i>
                <!-- <i class="fas fa-spinner"></i> -->
              </span>
            </router-link>
            <router-link to="/profile" class="button is-black">
              <span class="icon is-large">
                <!-- <i class="far fa-user-circle"></i> -->
                <i class="fas fa-2x fa-user-circle"></i>
              </span>
            </router-link>
            <router-link to="/add" class="button is-black">
              <span class="icon is-large">
                <i class="fas fa-2x fa-plus-circle"></i>
              </span>
            </router-link>
          </div>
        </div>

        <div id="navbar-divider"></div>

        <div class="navbar-brand">
          <router-link to="/feed" class="navbar-item">
            <img src="../assets/vibe-logo.png" width="80" />
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "player",
  mounted() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.$store.state.player = new window.Spotify.Player({
        name: "Web Playback SDK Quick Start Player",
        getOAuthToken: cb => {
          cb(this.$store.state.access_token);
        },
        volume: 1
      });

      // Error handling
      this.$store.state.player.addListener(
        "initialization_error",
        ({ message }) => {
          console.error(message);
        }
      );
      this.$store.state.player.addListener(
        "authentication_error",
        ({ message }) => {
          console.error(message);
        }
      );
      this.$store.state.player.addListener("account_error", ({ message }) => {
        console.error(message);
      });
      this.$store.state.player.addListener("playback_error", ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      this.$store.state.player.addListener("player_state_changed", state => {
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
      this.$store.state.player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        this.$store.state.player_id = device_id;
      });

      // Not Ready
      this.$store.state.player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      // Connect to the player!
      this.$store.state.player.connect().then(success => {
        if (success) {
          console.log(
            "The Web Playback SDK successfully connected to Spotify!"
          );
        }
      });
    };

    let spotifyWebplaybackSDK = document.createElement("script");
    spotifyWebplaybackSDK.setAttribute(
      "src",
      "https://sdk.scdn.co/spotify-player.js"
    );
    document.head.appendChild(spotifyWebplaybackSDK);
  },
  computed: {
    ...mapGetters([
      "getAccessToken",
      "getPlayerId",
      "getCurrentTrack",
      "isPlaying"
    ])
  },
  methods: {
    ...mapActions(["play", "pause", "skip"]),
    ...mapMutations({
      setPlay: "play",
      setPause: "pause"
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

.navbar {
  width: 100%;
}

.navbar-start {
  width: 20%;
}

.navbar-middle {
  width: 60%;
  text-align: center;
}

.navbar-end {
  width: 20%;
}

#navbar-divider {
  margin: 0 10px;
}
</style>

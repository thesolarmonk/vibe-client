<template>
  <nav
    class="navbar is-fixed-bottom is-black is-spaced player"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-menu is-active">
      <div class="navbar-start">
        <div class="buttons is-centered">
          <a class="button is-black" @click="skip({ skip: 'previous' })">
            <span class="icon is-large">
              <i class="fas fa-lg fa-backward"></i>
            </span>
          </a>

          <a v-if="isPlaying" class="button is-black" @click="pause()">
            <span class="icon is-large">
              <i class="fas fa-3x fa-pause-circle"></i>
            </span>
          </a>

          <a v-else class="button is-black">
            <span class="icon is-large" @click="play({ feed_index: null })">
              <i class="fas fa-3x fa-play-circle"></i>
            </span>
          </a>

          <a class="button is-black" @click="skip({ skip: 'next' })">
            <span class="icon is-large">
              <i class="fas fa-lg fa-forward"></i>
            </span>
          </a>
        </div>
      </div>

      <div class="navbar-middle" @click="showCurrent()">
        <div v-if="currentTrack.name != null" class="player--info">
          <strong>{{ currentTrackInfo }}</strong>
          <br />
          <span class="player--info-user">Shared by {{ currentTrack.user_name }}</span>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/feed" class="button is-black">
              <span class="icon is-large has-text-grey">
                <i class="fas fa-2x fa-dot-circle"></i>
                <!-- <i class="fas fa-spinner"></i> -->
              </span>
            </router-link>
            <router-link to="/profile" class="button is-black">
              <span class="icon is-large has-text-grey">
                <!-- <i class="far fa-user-circle"></i> -->
                <i class="fas fa-2x fa-user-circle"></i>
              </span>
            </router-link>
            <router-link to="/add" class="button is-black">
              <span class="icon is-large has-text-grey">
                <i class="fas fa-2x fa-plus-circle"></i>
              </span>
            </router-link>
          </div>
        </div>

        <div id="navbar-divider"></div>

        <div class="navbar-brand">
          <router-link to="/feed" class="navbar-item">
            <p class="player--logo">VIBE</p>
            <!-- <img src="../assets/vibe-logo-bw.png" width="80" /> -->
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
  mounted() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.$store.state.player = new window.Spotify.Player({
        name: "Vibe",
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
        console.log(state.track_window.current_track);
        this.setCurrentFeedIndex(state.track_window.current_track.id);
        if (state.paused) {
          this.setPause();
        } else {
          this.setPlay();

          if (state.position < 2000) {
            this.showCurrent();
          }
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
    ...mapGetters(["currentTrack", "isPlaying"]),
    currentTrackInfo() {
      return this.currentTrack.name + "\t‣\t" + this.currentTrack.artist;
    }
  },
  methods: {
    ...mapActions(["play", "pause", "skip"]),
    ...mapMutations({
      setPlay: "play",
      setPause: "pause",
      setCurrentFeedIndex: "setCurrentFeedIndex"
    }),
    showCurrent() {
      document
        .getElementById(this.currentTrack.id)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
};
</script>

<style lang="scss">
.player {
  background-color: black;
  .player--info {
    color: white;
    padding-top: 10px;

    cursor: pointer;

    .player--info-user {
      color: rgb(95, 95, 95);
    }
  }
}

.player--logo {
  font-family: "Marvin Visions", sans-serif;
  color: #fff;
  font-size: 35px;
  letter-spacing: 1px;

  cursor: pointer;
}

.player--logo:hover {
  background: linear-gradient(
    100deg,
    #ffd400,
    #c2ff00,
    #00ffde,
    #6ae2cb,
    #00ccff,
    #00ffde,
    #c2ff00,
    #ffd400
  );

  animation: rainbow 1s linear infinite;

  background-size: 200% auto;

  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes rainbow {
  to {
    background-position: 200% center;
  }
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

.button:hover .icon .fas {
  color: #fff;
}
</style>

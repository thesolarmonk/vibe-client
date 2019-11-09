<template>
  <div>
    <button
      @click="play({
        track_uri: 'spotify:track:314ZkcV7oLWG8yWE7LABvH',
        player_id: getPlayerId,
        access_token: getAccessToken
      })"
    >Play / Pause</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
        console.log(state);
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
  },
  computed: {
    ...mapGetters(["getAccessToken", "getPlayerId"])
  },
  methods: {
    ...mapActions(["play", "pause"])
  }
};
</script>

<style>
</style>

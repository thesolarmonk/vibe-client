<template></template>

<script>
import { mapGetters } from "vuex";

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
    play: ({ spotify_uri, id, access_token }) => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: "PUT",
        body: JSON.stringify({
          uris: [spotify_uri]
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`
        }
      })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>

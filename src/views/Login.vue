<template>
  <div>
    <button id="login with spotify" @click="login()">Login with Spotify</button>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      spotifyAuthUrl:
        "https://accounts.spotify.com/authorize?client_id=5ae1d35a487842fcbef9cb7f164ec3fb&response_type=token&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Ffeed&scope=streaming%20user-read-email%20user-read-private"
    };
  },
  methods: {
    login: function() {
      fetch(this.spotifyAuthUrl, {
        method: "GET"
      }).then(response => {
        window.location.href = response.url;
        // console.log("test");
      });
    }
  }
};
</script>

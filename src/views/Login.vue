<template>
  <div class="home">
    <img @click="login()" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods: {
    login: function() {
      fetch(
        "https://accounts.spotify.com/authorize?client_id=5ae1d35a487842fcbef9cb7f164ec3fb&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Ffeed&scope=streaming%20user-read-email%20user-read-private",
        {
          method: "GET"
        }
      ).then(response => {
        window.location.href = response.url;
        // console.log("test");
      });
    }
  }
};
</script>

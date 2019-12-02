<template>
  <div class="login">
    <h1 class="login--logo">VIBE</h1>
    <router-link v-if="isAuthenticated" to="/add"
      ><button class="add--button button is-rounded">
        <span class="icon">
          <i class="fas fa-plus"></i>
        </span>
        <!-- <span></span>
      -->
        <h6 class="title is-6">Add a song</h6>
      </button></router-link
    >
    <button v-else class="login--button button is-rounded" @click="login()">
      <span class="icon">
        <i class="fab fa-spotify"></i>
      </span>
      <!-- <span></span>
      -->
      <h6 class="title is-6">Login with Spotify</h6>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  data() {
    return {
      spotifyAuthUrl: `${process.env.VUE_APP_SPOTIFY_AUTH_URL}/authorize?client_id=${process.env.VUE_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${process.env.VUE_APP_SPOTIFY_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-read-recently-played%20user-modify-playback-state%20user-read-playback-state%20playlist-modify-private%20user-top-read`
    };
  },
  methods: {
    login: function() {
      fetch(this.spotifyAuthUrl, {
        method: 'GET'
      }).then(response => {
        window.location.href = response.url;
      });
    }
  }
};
</script>

<style>
.login {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.login--logo {
  font-family: 'Marvin Visions', sans-serif;
  color: #fff;
  font-size: 300px;
  letter-spacing: 5px;

  cursor: default;

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

  animation: rainbow 2s linear infinite;

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

.login--button {
  border-width: 0px;
  background-color: #1db954;
}

.add--button {
  border-width: 0px;
  background-color: #00b7ff;
}

.login--button:hover h6,
.add--button:hover h6 {
  color: black;
}
</style>

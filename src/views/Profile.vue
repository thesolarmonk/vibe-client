<template>
  <div class="profile">
    <div class="profile-container profile--user-info">
      <img
        class="profile--user-info-picture"
        src="https://deposify.com/wp-content/uploads/2016/07/footer-gradient-circle.png"
      />
      <div class="container has-text-centered">
        <h5 class="title is-5 profile--user-info-name">{{ getUserName }}</h5>
        <span class="tag is-light profile--user-info-id">@{{ getUserId }}</span>
      </div>
      <div class="profile--user-info-stats">
        <div class="container has-text-centered stats">
          <h4 class="title is-4 is-uppercase">100</h4>
          <h4 class="subtitle is-4">Friends</h4>
        </div>
        <div class="container has-text-centered stats">
          <h4 class="title is-4 is-uppercase">10</h4>
          <h4 class="subtitle is-4">Posts</h4>
        </div>
        <div class="container has-text-centered stats">
          <h4 class="title is-4 is-uppercase">Mood</h4>
          <h4 class="subtitle is-4">Happy</h4>
        </div>
      </div>
    </div>
    <div class="profile-container profile--graphs">
      <!-- <template>
        <b-carousel
          v-model="carousel"
          :animated="slide"
          :autoplay="false"
          :pause-hover="true"
          :pause-info="true"
          :interval="3000"
          :arrow="true"
          :arrow-both="false"
          :icon-pack="fas"
          :icon-size="is-large"
          :indicator-style="is-lines"
        >
          <b-carousel-item>
            <section class="graph">
              <h1 class="title">Graph 1</h1>
            </section>
          </b-carousel-item>
          <b-carousel-item>
            <section class="graph">
              <h1 class="title">Graph 2</h1>
            </section>
          </b-carousel-item>
        </b-carousel>
      </template>-->
      <chart></chart>
    </div>
    <div class="profile-container profile--posts-list">
      <track-item
        v-for="track in recently_posted_tracks"
        :key="track.track.id"
        :track_data="track.track"
        :isProfile="true"
        class="track"
      ></track-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Chart from '../components/Chart.vue';
import TrackItem from '../components/Track.vue';

export default {
  components: {
    Chart,
    TrackItem
  },
  data() {
    return {
      recently_posted_tracks: 0
    };
  },
  computed: {
    ...mapGetters(['getUserId', 'getUserName', 'accessToken'])
  },
  mounted() {
    let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/recently-played?limit=12`;

    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${this.accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => (this.recently_posted_tracks = data.items))
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.profile {
  display: grid;

  grid-template-columns: [info-start] 1fr [info-end graphs-start] 2.5fr [graphs-end posts-start] 1fr [posts-end];
  column-gap: 25px;

  padding: 2% 2% 3% 2%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
}

.profile-container {
  border-radius: 20px;
}

.profile--user-info {
  grid-column: info-start / info-end;

  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #ffffff;
}

.profile--user-info-picture {
  /* border: 2px dashed white; */
  border-radius: 10000px;

  padding: 30px 35px 10px 35px;
}

.profile--user-info-id {
  margin-bottom: 15px;
}

.stats {
  width: 100%;
  padding: 25px 0 20px 0;
  border-top: 1px solid white;
}

.profile--graphs {
  grid-column: graphs-start / graphs-end;

  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #ffffff;
}

.carousel,
.carousel-list,
.carousel-item,
.graph {
  height: 100% !important;
}

.profile--posts-list {
  grid-column: posts-start / posts-end;

  overflow-x: scroll;
}

.profile--posts-list::-webkit-scrollbar {
  display: none;
}
</style>

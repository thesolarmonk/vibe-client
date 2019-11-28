<template>
  <div class="profile">
    <div class="profile-container profile--user-info">
      <img
        class="is-rounded"
        src="https://icon-library.net//images/default-user-icon/default-user-icon-9.jpg"
      />
      <p class="user-name-object">{{getUserName}}</p>
      <div class="item-data">
        <div class="data-item">
          <p>100</p>
          <p>Friends</p>
        </div>
        <div class="data-item">
          <p>10</p>
          <p>Songs</p>
        </div>
        <div class="data-item">
          <p>12</p>
          <p>Active Days</p>
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

<style scoped>
.profile {
  display: grid;

  grid-template-columns: [info-start] 1fr [info-end graphs-start] 3fr [graphs-end posts-start] 1.5fr [posts-end];
  /* grid-template-rows: [info-start] 0.5fr [input-end header-start] 0.3fr [header-end results-start] 10fr [results-end]; */
  column-gap: 25px;

  padding: 2%;
  overflow: hidden;
  /* background-image: linear-gradient(0deg, rgb(85, 85, 85) 0%, #000000 25%); */
}

.profile-container {
  border-radius: 20px;
}

.profile--user-info {
  grid-column: info-start / info-end;
  background-color: #333;
}

.profile--graphs {
  grid-column: graphs-start / graphs-end;
  background-color: #333;
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

/*  ****************************************** */

.item-user-profile {
  grid-area: user-profile;
  position: relative;
  border: 2px solid #66ff66;
  border-radius: 12px;
}

.item-song-list {
  grid-area: song-list;
  border: 2px solid green;
  border-radius: 12px;
}

.item-header {
  grid-area: header;
  border: 2px solid #ccff99;
  border-radius: 12px;
  position: relative;
}

.item-data {
  grid-area: data;
  border: 2px solid #80d4ff;
  border-radius: 12px;
}

.item-main-graph {
  grid-area: main-graph;
  border: 2px solid blue;
  border-radius: 12px;
}

.item-graph {
  grid-area: graph;
  border: 2px solid blueviolet;
  border-radius: 12px;
}

.is-rounded {
  max-width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.header {
  max-width: 100%;
  font-size: 24px;
  line-height: 15px;
  height: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.user-name {
  float: left;
  margin-left: 30px;
}

.data-item {
  text-align: center;
  padding-left: 130px;
  padding-top: 25px;
  padding-right: 100px;
  float: left;
}

.profile-image-object {
  padding-left: "40px";
  width: "50px";
  float: "left";
  height: "100px";
}

.user-name-object {
  display: "table-cell";
  padding-top: "35px";
  padding-left: "40px";
  float: "left";
  margin-left: "30px";
  font-size: "large";
}
</style>

<script>
import { mapGetters } from "vuex";

import TrackItem from "../components/Track.vue";

export default {
  components: {
    TrackItem
  },
  data() {
    return {
      recently_posted_tracks: 0
    };
  },
  props: {
    callMe: {
      type: Function
    }
  },
  computed: {
    ...mapGetters(["getUserId", "getUserName", "accessToken"])
  },
  methods: {
    flipMini() {
      this.mini = !this.mini;
      this.callMe("flip");
    }
  },
  mounted() {
    let url = `${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/recently-played?limit=12`;

    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
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

<template>
  <div class="container">
    <div class="item-user-profile">
      <figure class="image is-128x128" v-bind:style="profileImageObject">
        <img
          class="is-rounded"
          src="https://icon-library.net//images/default-user-icon/default-user-icon-9.jpg"
        />
      </figure>
      <p v-bind:style="userNameObject">{{userName}}</p>
    </div>
    <div class="item-song-list">
      <p class="sub-item">Top Tracks</p>
    </div>
    <div class="item-header">
      <p class="header">Analytics</p>
    </div>
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
    <div class="item-main-graph"></div>
    <div class="item-graph"></div>
  </div>
</template>

<style type="text/css">
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

.app--view {
  grid-row: view-start / view-end;
  overflow-x: visible;
}

.container {
  padding-top: 30px;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  grid-template-columns: 300px 300px 200px 400px;
  grid-template-rows: 100px 100px 200px 220px;
  grid-template-areas:
    "user-profile header header header"
    "song-list data data data"
    "song-list main-graph main-graph graph"
    "song-list main-graph main-graph graph";
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "",
  components: {},
  props: {
    callMe: {
      type: Function
    }
  },
  computed: {
    ...mapGetters(["getUserId", "getUserName"])
  },
  data() {
    return {
      profileImageObject: {
        paddingLeft: "40px",
        width: "50px",
        float: "left",
        height: "100px"
      },
      userNameObject: {
        display: "table-cell",
        paddingTop: "35px",
        paddingLeft: "40px",
        float: "left",
        marginLeft: "30px",
        fontSize: "large"
      },
      userName: this.getUserName
    };
  },
  methods: {
    flipMini() {
      this.mini = !this.mini;
      this.callMe("flip");
    }
  }
};
</script>

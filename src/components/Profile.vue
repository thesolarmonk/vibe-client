<template>
  <div>
    <div v-bind:style="userInfoObject">
      <img
        v-bind:style="profileImageObject"
        src="https://icon-library.net//images/default-user-icon/default-user-icon-9.jpg"
      />
      <p v-bind:style="userNameObject">User Name</p>
    </div>
    <div v-bind:style="trackListObject">
      <li>track1</li>
      <li>track2</li>
    </div>
    <div v-bind:style="graphsObject">
      <p>Graphs place holder</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      profileImageObject: {
        width: "50px",
        float: "left"
      },
      userInfoObject: {
        width: "100%",
        marginTop: "75px",
        marginLeft: "20px",
        height: "100px"
      },
      userNameObject: {
        display: "table-cell",
        paddingTop: "15px",
        paddingLeft: "10px"
      },
      trackListObject: {
        float: "left"
      },
      graphsObject: {
        float: "left",
        paddingLeft: "50px"
      }
    };
  }
};
</script>
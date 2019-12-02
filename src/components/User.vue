<template>
  <div class="card user">
    <div class="card-image">
      <figure class="image is-3by3">
        <img class="user--profile-pic" :src="profilePicUrl" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <a class="button is-black user--follow-new">
            <span class="icon is-large" @click="followUser()">
              <i v-if="added" class="fas fa-2x fa-check-circle"></i>
              <i v-else class="fas fa-2x fa-plus-circle"></i>
            </span>
          </a>
        </div>
        <div class="media-content">
          <p class="user--name title is-6" v-html="userName"></p>
          <p class="user--id subtitle is-6" v-html="userId"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["user_data"],
  data() {
    return {
      added: false
    };
  },
  computed: {
    ...mapGetters(["getUserId"]),
    profilePicUrl() {
      return this.user_data.profile_pic_url;
    },
    userName() {
      return this.user_data.user_name;
    },
    userId() {
      return this.user_data.user_id;
    }
  },
  methods: {
    followUser() {
      let url = `${process.env.VUE_APP_VIBE_API_URL}/api/users/${this.getUserId}/friends/${this.userId}`;

      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => {
          if (response.status == 201) {
            console.log("Friend added successfully");
            this.added = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.user {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}
</style>

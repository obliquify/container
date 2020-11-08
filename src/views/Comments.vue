<template>
  <div class="container">
    <div class="title">
      <h2>Thoughts.</h2>
    </div>
    <div class="container-1">
      <div v-bind:key="comment.id" v-for="comment in comments">
        <Comment v-bind:comment="comment" />
      </div>
    </div>

    <div class="container-2">
      <h4>Post a thought. Click "expel" when done.</h4>
      <form @submit="submitComment">
        <div class="form-group">
          <textarea v-model="text" class="form-control" id cols="30" rows="10"></textarea>
        </div>
        <button type="submit" class="expel">EXPEL</button>
      </form>
    </div>

    <v-footer class="footer">
      <p>2020 &#169; Kallie</p>
      <a target="blank" href="https://github.com/obliquify/container.git">REPOSITORY</a>
    </v-footer>

    <div class="clr"></div>
  </div>
</template>

<script>
import mock from "../mock.js";
import Comment from "./Comment";
import moment from "moment";
import uuid from "uuid";
export default {
  name: "Comments",
  props: {},
  components: {
    Comment,
  },

  data() {
    return {
      comments: mock,
      text: "",
    };
  },

  methods: {
    submitComment(e) {
      e.preventDefault();
      const newComment = {
        id: uuid.v4(),
        content: this.text,
        date: moment().format("L"),
      };

      alert("Successfully submitted!");
      this.comments = [newComment, ...this.comments];

      this.text = "";
    },
  },

  created: function () {
    console.log(mock);
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

.container {
  box-sizing: border-box;
  margin: auto;
}

.title {
    padding: 30px;

}

.container-1 {
  width: 50%;
  box-sizing: border-box;
  float: left;
  height: 500px;
  overflow: scroll;
}

.container-2 {
  width: 48%;
  float: right;
  box-sizing: border-box;
}
.expel {
  background-color: #c9d5b5;
  padding: 10px 50px 10px 50px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
}

.clr{clear:both}
</style>
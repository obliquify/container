<template>
  <div class="task-item">
    <p>
      <span id="content">{{comment.content}}</span>
      <span id="date">-- {{comment.date}}</span>
    </p>
    
  </div>

  
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"],

  methods: {},
};
</script>


<style scoped>
.task-item {
  background-color: #f9e7e7;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  box-sizing: border-box;
  overflow: hidden;
}
#content {
  float: left;
}
#date {
  float: right;
}
</style>
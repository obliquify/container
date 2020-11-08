<template>
  <div class="task-item" v-bind:class="{'is-complete':task.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{task.title}}
      <button @click="$emit('del-task', task.id)" class="del-task">✖︎</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"],

  methods: {
    markComplete() {
      this.task.completed = !this.task.completed;
    },
  },
};
</script>


<style scoped>
.task-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.del-task {
  background: #f5cac3;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  float: right;
}
</style>
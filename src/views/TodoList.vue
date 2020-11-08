<template>
  <div id="todoList">
    <AddTodo v-on:add-todo="addTodo" />
    <Tasks v-bind:tasks="tasks" v-on:del-task="deleteTask" />

    <div class="footer">
      <p>2020 &#169; Kallie</p>
      <a target="blank" href="https://github.com/obliquify/container.git">REPOSITORY</a>
    </div>
  </div>
</template>

<script>
import Tasks from "./Tasks";
import AddTodo from "./AddTodo";

export default {
  name: "TodoList",
  components: {
    Tasks,
    AddTodo,
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter((each) => each.id !== id);
    },
    addTodo(newTodo) {
      this.tasks = [...this.tasks, newTodo];
    },
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Buy sponges",
          completed: false,
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.footer {
  padding-top: 30px;
}


</style>

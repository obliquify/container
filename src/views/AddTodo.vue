<template>
  <div id="addTodo">
    <div>
      <h3>Track Tasks Here</h3>
    </div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo..." />
      <input type="submit" value="SUBMIT" class="btn" />
    </form>
    
  </div>
</template>

<script>
import uuid from "uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false,
      };
      // Send up to parent
      this.$emit("add-todo", newTodo);
      this.title = "";
    },
  },
  created() {
    console.log("hi");
  },
};
</script>

<style scoped>
form {
  display: flex;
  padding: 20px 40px 20px 40px;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}

#addTodo {
  margin-top: 30px;
}
.btn {
  background-color: #C9D5B5;
  color: #fff;
  margin-left: 10px
}


</style>
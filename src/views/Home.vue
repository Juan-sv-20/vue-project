<template>
  <div class="home">
    <!--
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    -->
    <todo-item v-for="cosa in cosas"
      v-bind:data="cosa"
      v-bind:key="cosa.id"
    >
    </todo-item>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

import todoItem from "@/components/li-item.vue";

export default {
  name: "Home",
  data() {
    return {
      cosas: [
      { id: 0, text: "Vegetales" },
      { id: 1, text: "Frutas" },
      { id: 2, text: "Carne" }
    ]
    }
  },
  components: {
    todoItem
  }
};
</script>

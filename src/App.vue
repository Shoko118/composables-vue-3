<script setup>
import { useDemo } from "../composobles/Demo";

const { todos, addTodos, input } = useDemo();
</script>

<template>
  <div>
    <h1 class="text-red-500 text-3xl">Composobles Code</h1>

    <label for="input">type here...</label>
    <input type="text" v-model="input" />
    <button @click="addTodos">Add Todo</button>

    <ul>
      <li v-for="todo in todos" :key="todo">{{ todo.name }}</li>
    </ul>
  </div>
</template>

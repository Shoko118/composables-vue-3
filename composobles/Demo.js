import { ref } from "vue";

export const useDemo = () => {
  const input = ref("");
  const todos = ref([
    {
      id: 1,
      name: "Leon",
    },
    {
      id: 2,
      name: "Quinee",
    },
  ]);

  function addTodos() {
    todos.value.push({
      name: input.value,
    });
  }

  return {
    todos,
    input,
    addTodos,
  };
};

<template>
  <div>
    <b-list-group class="w-50 p-3 mb-1 mx-auto">
      <b-list-group-item
        class="h5 list-item"
        href="/recipe/1"
        @click="showRecipe"
        v-for="(recipe, index) in recipes"
        :key="index"
        >{{ recipe.name }}</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    recipes: Array
  },
  methods: {
    showRecipe() {
      console.log("hello");
    }
  }
};
</script>

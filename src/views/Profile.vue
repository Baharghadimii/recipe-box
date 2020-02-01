<template>
  <div>
    <b-jumbotron header="Bahareh Ghadimi">
      <p>Number of recipes: {{ numRecipe }}</p>
      <b-button variant="primary" href="/">back</b-button>
    </b-jumbotron>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      numRecipe: 0
    };
  },
  computed: {
    ...mapState(["recipes"])
  },
  mounted() {
    const numberOfRecipes = this.recipes.length;
    this.numRecipe = numberOfRecipes;
  }
};
</script>

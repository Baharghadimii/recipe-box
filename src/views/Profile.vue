<template>
  <div>
    <b-jumbotron header="Bahareh Ghadimi">
      <p>Number of recipes: {{ numRecipe }}</p>
      <b-button variant="primary" href="/">back</b-button>
    </b-jumbotron>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      numRecipe: 0
    };
  },
  computed: {
    ...mapGetters(["getTotalNumRecipe"])
  },
  mounted() {
    const numberOfRecipes = this.getTotalNumRecipe;
    this.numRecipe = numberOfRecipes;
  }
};
</script>

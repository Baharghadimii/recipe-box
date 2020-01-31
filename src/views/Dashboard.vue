<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>Dashboard</template>
      <hr class="my-4" />

      <RecipeList />

      <b-button class="btn-dash" href="#">Add New Recipe</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import RecipeList from "../components/RecipeList";
export default {
  components: {
    RecipeList
  }
};
</script>

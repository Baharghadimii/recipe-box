<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>Dashboard</template>
      <hr class="my-4" />

      <RecipeList />

      <b-button variant="primary" href="#">Do Something</b-button>
      <b-button variant="success" href="#">Do Something Else</b-button>
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

<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>Dashboard</template>
      <hr class="my-4" />
      <RecipeList :recipes="recipes" />
      <b-button class="btn-dash" href="#">Add New Recipe</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RecipeList from "../components/RecipeList";
export default {
  components: {
    RecipeList
  },
  computed: {
    ...mapState(["recipes"])
  }
};
</script>

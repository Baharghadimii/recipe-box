<template>
  <div class="mt-4">
    <h4>{{ recipe.name }}</h4>
    <b-card
      v-bind:img-src="recipe.image"
      img-alt="Card image card-image"
      img-left
      class="mb-4 card-image"
    >
      <b-card-text class="card-text"
        ><b> Recipe Ingredients:</b> {{ recipe.ingredients }}
      </b-card-text>
      <b-card-text class="card-text">
        <b>Recipe Instruction:</b> {{ recipe.instruction }}
      </b-card-text>
      <b-button type="submit" href="/" class="btn-form submit">Back</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: Number(this.$route.params.id),
      recipe: {}
    };
  },
  computed: {
    ...mapState(["recipes"])
  },
  mounted() {
    const recipe = this.recipes.filter(item => item.id === this.id);
    this.recipe = recipe[0];
  }
};
</script>

export default {
  appendRecipe: (state, { recipe }) => {
    console.log(recipe)
    state.recipes.push(recipe)
  }
}

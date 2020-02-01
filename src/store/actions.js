
export default {
  addRecipe: ({ commit }, payload) => {
    commit('appendRecipe', payload);
  }
}

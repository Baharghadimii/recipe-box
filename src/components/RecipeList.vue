<template>
  <div>
    <b-list-group class="w-50 p-3 mb-1 mx-auto">
      <b-list-group-item class="h5 list-item" @click="showRecipe"
        >Cras justo odio</b-list-group-item
      >
      <b-list-group-item class="h5 list-item"
        >Dapibus ac facilisis in</b-list-group-item
      >
      <b-list-group-item class="h5 list-item"
        >Morbi leo risus</b-list-group-item
      >
      <b-list-group-item class="h5 list-item"
        >Porta ac consectetur ac</b-list-group-item
      >
      <b-list-group-item class="h5 list-item"
        >Vestibulum at eros</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
export default {
  methods: {
    showRecipe() {
      console.log("hello");
    }
  }
};
</script>

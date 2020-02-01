<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" class="form">
      <b-form-group id="input-group-1" label="Food Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter Food Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ingredients:" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.ingredients"
          required
          multiple
          placeholder="Enter Ingredients"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group id="input-group-3" label="Instruction:" label-for="input-3">
        <b-form-textarea
          id="input-3"
          v-model="form.instruction"
          required
          placeholder="Enter Instruction"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="reset" class="btn-form reset">Reset</b-button>
      <b-button type="submit" class="btn-form submit" @submit.prevent
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        ingredients: "",
        instruction: ""
      }
    };
  },
  methods: {
    ...mapActions(["addRecipe"]),
    onSubmit(event) {
      event.preventDefault();
      const { name, ingredients, instruction } = this.form;
      const payload = {
        recipe: { name, ingredients, instruction }
      };
      this.addRecipe(payload);
      this.onReset(event);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.ingredients = "";
      this.form.instruction = "";
    }
  }
};
</script>

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
      <b-button type="submit" class="btn-form submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
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
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

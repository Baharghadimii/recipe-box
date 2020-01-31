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
        <b-form-input
          id="input-2"
          v-model="form.ingredients"
          required
          placeholder="Enter Ingredients"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Instruction:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.instruction"
          required
          placeholder="Enter Instruction"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
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

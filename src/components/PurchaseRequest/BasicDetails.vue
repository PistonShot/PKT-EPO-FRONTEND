<template>
  <v-card variant="flat" title="Basic Details">
    <v-divider class="mb-4"></v-divider>
    <div class="outer-div1">
      <div class="div1">
        <v-text-field
          label="Title"
          variant="outlined"
          v-model="formData.title"
          @input="updateFormData"
        ></v-text-field>
        <v-textarea
          label="Title Description"
          variant="outlined"
          v-model="formData.description"
          autogrow
          @input="updateFormData"
        ></v-textarea>
        <v-radio-group
          label="Budgeted"
          v-model="formData.budgeted"
          @change="updateFormData"
        >
          <v-radio label="Yes" value="yes"></v-radio>
          <v-radio label="No" value="no"></v-radio>
        </v-radio-group>
      </div>
      <div class="div2">
        <v-select
          variant="outlined"
          label="Subtitle"
          :items="subtitles"
          v-model="formData.subtitle"
          @change="updateFormData"
        ></v-select>
        <v-select
          variant="outlined"
          label="Procurement"
          :items="procurements"
          v-model="formData.procurement"
          @change="updateFormData"
        ></v-select>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: () => ({
        title: "",
        description: "",
        budgeted: "",
        subtitle: "",
        procurement: "",
      }),
    },
  },
  data() {
    return {
      subtitles: [],
      procurements: [],
    };
  },
  mounted() {
    this.fetchSubtitles();
    this.fetchProcurements();
  },
  methods: {
    updateFormData() {
      this.$emit("update:formData", this.formData);
    },
    fetchSubtitles() {
      // Mocking an API call
      setTimeout(() => {
        this.subtitles = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'];
      }, 1000);
    },
    fetchProcurements() {
      // Mocking an API call
      setTimeout(() => {
        this.procurements = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'];
      }, 1000);
    }
  }
};
</script>

<style>
.outer-div1 {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
}
.div1 {
  display: flex;
  flex-direction: column;
  flex: 2;
}
.div2 {
  flex: 1;
}
</style>

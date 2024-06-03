<template>
  <v-card variant="flat" title="Preparer Details">
    <v-divider class="mb-4"></v-divider>
    <div class="preparerDiv1">
      <v-select
        variant="outlined"
        label="Company"
        :items="companies"
        v-model="preparerDetailsData.company"
        @change="updatepreparerDetailsData"
      ></v-select>
      <v-select
        variant="outlined"
        label="Department"
        :items="departments"
        v-model="preparerDetailsData.department"
        @change="updatepreparerDetailsData"
      ></v-select>
      <v-select
        variant="outlined"
        label="Location"
        :items="locations"
        v-model="preparerDetailsData.location"
        @change="updatepreparerDetailsData"
      ></v-select>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    preparerDetailsData: {
      type: Object,
      default: () => ({
        company: "",
        department: "",
        location: "",
      }),
    },
  },
  data() {
    return {
      companies: [],
      departments: [],
      locations: [],
    };
  },
  mounted() {
    this.fetchCompanies();
    this.fetchDepartments();
    this.fetchLocations();
  },
  methods: {
    fetchCompanies() {
      // Mocking an API call
      setTimeout(() => {
        this.companies = [
          "California",
          "Colorado",
          "Florida",
          "Georgia",
          "Texas",
          "Wyoming",
        ];
      }, 1000);
    },
    fetchDepartments() {
      // Mocking an API call
      setTimeout(() => {
        this.departments = [
          "California",
          "Colorado",
          "Florida",
          "Georgia",
          "Texas",
          "Wyoming",
        ];
      }, 1000);
    },
    fetchLocations() {
      // Mocking an API call
      setTimeout(() => {
        this.locations = [
          "California",
          "Colorado",
          "Florida",
          "Georgia",
          "Texas",
          "Wyoming",
        ];
      }, 1000);
    },
    updatepreparerDetailsData() {
      this.$emit("update:preparerDetailsData", this.preparerDetailsData);
    },
  },
};
</script>
<style>
.preparerDiv1 {
  display: flex;
  column-gap: 20px;
}
</style>

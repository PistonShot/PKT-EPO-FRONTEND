<template>
  <v-card variant="flat" title="Requestor Details">
    <v-divider class="mb-4"></v-divider>
    <div class="requestorDiv1">
      <v-select
        variant="outlined"
        label="Company"
        :items="companies"
        v-model="requestorDetailsData.company"
        @change="updaterequestorDetailsData"
      ></v-select>
      <v-select
        variant="outlined"
        label="Department"
        :items="departments"
        v-model="requestorDetailsData.department"
        @change="updaterequestorDetailsData"
      ></v-select>
      <v-select
        variant="outlined"
        label="Location"
        :items="locations"
        v-model="requestorDetailsData.location"
        @change="updaterequestorDetailsData"
      ></v-select>
    </div>
    <div class="requestorDiv2">
      <v-textarea
        label="Full Address"
        v-model="requestorDetailsData.address"
        @input="updaterequestorDetailsData"
      ></v-textarea>
      <v-text-field
        label="Attn To"
        variant="outlined"
        v-model="requestorDetailsData.attnTo"
        @input="updaterequestorDetailsData"
      ></v-text-field>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    requestorDetailsData: {
      type: Object,
      default: () => ({
        company: "",
        department: "",
        location: "",
        address: "",
        attnTo: "",
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
    updaterequestorDetailsData() {
      this.$emit("update:requestorDetailsData", this.requestorDetailsData);
    },
  },
};
</script>
<style>
.requestorDiv1 {
  display: flex;
  column-gap: 20px;
}
.requestorDiv2 {
  display: flex;
  column-gap: 20px;
}
</style>

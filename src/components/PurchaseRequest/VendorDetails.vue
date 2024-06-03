<template>
  <v-card variant="flat" title="Vendor Details">
    <v-divider class="mb-4"></v-divider>
    <div class="vendorDiv1">
      <v-select
        variant="outlined"
        label="Vendor Name"
        :items="vendorNames"
        v-model="vendorDetailsData.vendorName"
        @change="updatevendorDetailsData"
      ></v-select>
      <v-select
        variant="outlined"
        label="Quo Currency"
        :items="quoCurrencies"
        v-model="vendorDetailsData.quoCurrency"
        @change="updatevendorDetailsData"
      ></v-select>
      <v-text-field
        label="Vendor Quotation No"
        variant="outlined"
        v-model="vendorDetailsData.quotationNo"
        @input="updatevendorDetailsData"
      ></v-text-field>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    vendorDetailsData: {
      type: Object,
      default: () => ({
        vendorName: "",
        quoCurrency: "",
        quotationNo: "",
      }),
    },
  },
  data() {
    return {
      vendorNames: [],
      quoCurrencies: [],
    };
  },
  mounted() {
    this.fetchVendor();
    this.fetchCurrencies();
  },
  methods: {
    fetchVendor() {
      // Mocking an API call
      setTimeout(() => {
        this.vendorNames = [
          "California",
          "Colorado",
          "Florida",
          "Georgia",
          "Texas",
          "Wyoming",
        ];
      }, 1000);
    },
    fetchCurrencies() {
      // Mocking an API call
      setTimeout(() => {
        this.quoCurrencies = [
          "California",
          "Colorado",
          "Florida",
          "Georgia",
          "Texas",
          "Wyoming",
        ];
      }, 1000);
    },
    updatevendorDetailsData() {
      this.$emit("update:vendorDetailsData", this.vendorDetailsData);
    },
  },
};
</script>
<style>
.vendorDiv1 {
  display: flex;
  column-gap: 20px;
}
</style>

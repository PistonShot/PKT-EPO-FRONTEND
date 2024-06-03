<template>
  <v-card variant="flat" title="Billing Details">
    <v-divider class="mb-4"></v-divider>
    <div class="billingDiv1">
      <v-radio-group
        label="Budgeted"
        v-model="billingDetailsData.billtoCustomer"
        @change="updatebillingDetailsData"
        inline
      >
        <v-radio label="Yes" value="yes"></v-radio>
        <v-radio label="No" value="no"></v-radio>
      </v-radio-group>
      <v-text-field
        label="Company Name"
        variant="outlined"
        v-model="billingDetailsData.companyName"
        @input="updatebillingDetailsData"
      ></v-text-field>
      <v-select
        variant="outlined"
        label="Billing Frequency"
        :items="frequencies"
        v-model="billingDetailsData.frequency"
        @change="updatebillingDetailsData"
      ></v-select>
      <v-text-field
        label="Billing PIC Name"
        variant="outlined"
        v-model="billingDetailsData.pic"
        @input="updatebillingDetailsData"
      ></v-text-field>
    </div>
    <div class="billingDiv2">
        <v-text-field
        label="Billing Amount (MYR)"
        variant="outlined"
        v-model="billingDetailsData.amount"
        @input="updatebillingDetailsData"
      ></v-text-field>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    billingDetailsData: {
      type: Object,
      default: () => ({
        billtoCustomer: "",
        companyName: "",
        frequency: "",
        pic: "",
        amount: "",
      }),
    },
  },
  data() {
    return {
      frequencies: [],
    };
  },
  mounted() {
    this.fetchFrequencies();
  },
  methods: {
    fetchFrequencies() {
      // Mocking an API call
      setTimeout(() => {
        this.frequencies = ["1", "2", "3", "4"];
      }, 1000);
    },
    updatebillingDetailsData() {
      this.$emit("update:billingDetailsData", this.billingDetailsData);
    },
  },
};
</script>
<style>
.billingDiv1 {
  display: flex;
  column-gap: 20px;
}
.billingDiv2{
    width: 33%;
}
</style>

<template>
  <v-form>
    <v-card class="ma-2" title="New Purchase Request">
      <v-col>
        <BasicDetails v-model:formData="formData" />
        <p>Form Data from Child: {{ formData }}</p>
        <VendorDetails
          v-model:vendorDetailsData="vendorDetailsData"
        ></VendorDetails>
        <p>Form Data from Child:{{ vendorDetailsData }}</p>
        <PreparerDetails
          v-model:preparerDetailsData="preparerDetailsData"
        ></PreparerDetails>
        <p>Form Data from Child:{{ preparerDetailsData }}</p>
        <RequestorDetails
          v-model:requestorDetailsData="requestorDetailsData"
        ></RequestorDetails>
        <p>Form Data from Child:{{ requestorDetailsData }}</p>
        <BillingDetails
          v-model:billingDetailsData="billingDetailsData"
        ></BillingDetails>
        <p>Form Data from Child:{{ billingDetailsData }}</p>
      </v-col>
    </v-card>
  </v-form>
  <div class="innerButtonDiv">
      <v-btn>Save as Draft</v-btn>
      <v-btn>Next</v-btn>
  </div>
</template>
<script>
import BasicDetails from "@/components/PurchaseRequest/BasicDetails.vue";

export default {
  components: {
    BasicDetails,
  },
  data() {
    return {
      formData: {
        title: "",
        description: "",
        budgeted: "",
        subtitle: "",
        procurement: "",
      },
      vendorDetailsData: {
        vendorName: "",
        quoCurrency: "",
        quotationNo: "",
      },
      preparerDetailsData: {
        company: "",
        department: "",
        location: "",
      },
      requestorDetailsData: {
        company: "",
        department: "",
        location: "",
        address: "",
        attnTo: "",
      },
      billingDetailsData: {
        billtoCustomer: "",
        companyName: "",
        frequency: "",
        pic: "",
        amount: "",
      },
    };
  },
};
</script>
<style>
.innerButtonDiv {
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: end;
  column-gap: 20px;
  margin: 10px 10px 10px 10px;
}
</style>

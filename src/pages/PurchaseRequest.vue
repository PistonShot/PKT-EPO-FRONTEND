<template>
  <!-- Start -->
  <v-container fluid>
    <v-row>
      <v-col class="ma-2">
        <h2>Purchase Requests</h2>
        <v-btn
          prepend-icon="mdi-plus-circle-outline"
          class="mt-2"
          @click="createPR()"
        >
          Create a Purchase Request
        </v-btn>
      </v-col>
      <v-card title="Number of Requests" text="1" class="pa-2 ma-2"></v-card>
    </v-row>
  </v-container>
  <!-- End of component -->

  <!-- Tabs -->
  <v-tabs v-model="tab" align-tabs="start" color="deep-purple-accent-4">
    <v-tab :value="1">My Requests</v-tab>
    <v-tab :value="2">All Requests</v-tab>
  </v-tabs>

  <!-- Tabs Content -->
  <v-tabs-window v-model="tab">
    <v-tabs-window-item :value="1">
      <my-request v-if="tab === 1" />
    </v-tabs-window-item>
    <v-tabs-window-item :value="2">
      <all-requests v-if="tab === 2" />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script>
import MyRequest from "@/components/PurchaseRequest/MyRequest.vue";
import AllRequests from "@/components/PurchaseRequest/AllRequests.vue";

export default {
  components: { MyRequest, AllRequests },
  data: () => ({
    tab: 1, // Set default tab
  }),
  methods: {
    createPR() {
      this.$router.push("/purchase-request/create");
    },
  },
};
</script>

<style></style>

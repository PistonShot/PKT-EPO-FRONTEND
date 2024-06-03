<template>
  <v-data-table :items="items"></v-data-table>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          PRNo: "ab/02/2023/academic",
          title: "Something",
          Date: "02/04/2024",
          "Vendor Name": "Audio Visual Supplier",
          "In-Charge": "Someone 1",
          Total: "MYR 2000",
          "Req.Dept": "Academic Service",
          Status: "Draft",
        },
      ],
    };
  },
};
</script>

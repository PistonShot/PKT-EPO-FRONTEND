<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      :title="user.username"
      nav
    >
      <template v-slot:append>
        <v-btn
          icon="mdi-chevron-left"
          variant="text"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :link="item.link"
        :prepend-icon="item.icon"
        :title="item.title"
        @click="navigateTo(item.link)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "Nandaprian",
      },
      drawer: true,
      rail: true,
      items: [
        { title: "Dashboard", link: "/dashboard", icon: "mdi-home-city" },
        {
          title: "Purchase Request",
          link: "/purchase-request",
          icon: "mdi-list-box-outline",
        },
        {
          title: "Invoice",
          link: "/invoice",
          icon: "mdi-receipt-text-check-outline",
        },
        {
          title: "Approval",
          link: "/approval",
          icon: "mdi-order-bool-ascending-variant",
        },
      ],
    };
  },
  methods: {
    navigateTo(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style></style>

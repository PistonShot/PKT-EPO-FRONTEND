<template>
  <v-app>
    <v-main>
      <nav-drawer v-if="!isLogin"></nav-drawer>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

export default {
  data() {
    return {
      isLogin: computed(() => {
        if (this.$router.currentRoute.value.name != "login") {
          return false;
        } else {
          return true;
        }
      }),
    };
  },
};
</script>

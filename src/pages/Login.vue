<template>
  <v-container fluid class="justify-center align-center fill-height">
    <v-card class="mainbody pa-2">
      <v-card-title> PKT-EPO </v-card-title>
      <v-col align="center" cols="12">
        <v-text-field
          label="Username"
          variant="outlined"
          type="text"
          v-model="form.email"
        ></v-text-field>
        <v-text-field
          label="Password"
          variant="outlined"
          type="password"
        ></v-text-field>
        <v-col align="end"><a href="">Forgot Password</a></v-col>
        <v-btn color="blue" @click="toDashboard">Login</v-btn>
      </v-col>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    form: {
      name: "",
      email: "",
    },
  }),
  methods: {
    toDashboard() {
      this.$router.replace("/dashboard");
    },
  },
};
</script>

<style>
.mainbody {
  max-width: 500px;
  min-width: 500px;
}
.fill-height {
  height: 98vh;
}
</style>

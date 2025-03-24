<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn dark text to="/">
        TabTracker
      </v-btn>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat dark color="cyan">
        Browse
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn dark text
      to="/login"
      v-if="!$store.state.isUserLoggedIn">
        Login
      </v-btn>
      <v-btn dark text
      to="/register"
      v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

</script>

<style scoped>
</style>

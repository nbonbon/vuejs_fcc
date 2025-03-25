<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn dark text to="/">
        TabTracker
      </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn dark text
        to="/songs"
        v-if="!$store.state.isUserLoggedIn">
          Browse
      </v-btn>
    </v-toolbar-items>
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
      <v-btn dark text
      @click="logout"
      v-if="$store.state.isUserLoggedIn">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
</style>

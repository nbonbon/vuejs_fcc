<template>
  <v-layout column class="pl-4 pr-4">
    <v-flex xs6>
      <div class="white elevation-2">
        <v-toolbar dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email" />
          <br>
          <v-text-field
            label="Password"
            v-model="password" />
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn
            class="cyan" dark
            @click="login">
            Login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <v-layout column>
    <v-flex xs6>
      <panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email" />
          <br>
          <v-text-field
            label="Password"
            type="password"
            autocomplete="new-password"
            v-model="password" />
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn
            class="cyan" dark
            @click="register">
            Register
          </v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>

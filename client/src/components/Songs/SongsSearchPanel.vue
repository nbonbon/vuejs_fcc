<template>
  <panel title="Search">
    <v-text-field
      label="Search by title, artist, album, or genre"
      v-model="search" />
  </panel>
</template>

<script>
export default {
  data () {
    return {
      search: this.$route.query.search || ''
    }
  },
  watch: {
    search (value) {
      if (this.search !== '') {
        this.$router.replace({
          query: {
            search: this.search
          }
        })
      }
    }
  }
}
</script>

<style scoped>
</style>

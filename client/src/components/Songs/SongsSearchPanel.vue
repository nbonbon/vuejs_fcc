<template>
  <panel title="Search">
    <v-text-field
      label="Search by title, artist, album, or genre"
      v-model="search" />
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      if (this.search !== '') {
        this.$router.replace({
          query: {
            search: this.search
          }
        })
      }
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
</style>

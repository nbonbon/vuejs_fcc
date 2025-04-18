<template>
  <panel title="Bookmarks">
    <v-data-table
      :headers="headers"
      :options.sync="options"
      :items="bookmarks">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{ props.item.title }}
        </td>
        <td class="text-xs-right">
          {{ props.item.artist }}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import BookmarkService from '@/services/BookmarksService'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      options: {
        sortBy: ["createdAt"], // Sort column
        sortDesc: [true] // Descending order
      },
      bookmarks: []
    }
  },
  computed: {
    isUserLoggedIn () {
      return this.$store.state.isUserLoggedIn
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarkService.index()).data
    }
  }
}
</script>

<style scoped>

</style>

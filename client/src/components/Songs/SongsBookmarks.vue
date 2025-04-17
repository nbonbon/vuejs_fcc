<template>
  <panel title="Bookmarks">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
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
      pagiantion: {
        sortBy: 'date',
        descending: true
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
      this.bookmarks = (await BookmarkService.index({
        userId: this.$store.state.user.id
      })).data

      if (this.bookmarks.length) {
        this.bookmark = this.bookmarks[0]
      }
    }
  }
}
</script>

<style scoped>

</style>

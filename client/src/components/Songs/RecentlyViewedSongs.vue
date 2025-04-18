<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
      :headers="headers"
      :options.sync="options"
      :items="histories">
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
import SongHistoryService from '@/services/SongHistoryService'

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
        sortBy: ['createdAt'],
        sortDesc: [true]
      },
      histories: []
    }
  },
  computed: {
    isUserLoggedIn () {
      return this.$store.state.isUserLoggedIn
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.histories = (await SongHistoryService.index()).data
    }
  }
}
</script>

<style scoped>

</style>

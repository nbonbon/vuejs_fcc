<template>
  <v-layout>
    <v-flex xs6>
      <songs-bookmarks />
    </v-flex>
    <v-flex xs6>
      <songs-search-panel></songs-search-panel>
      <songs-panel class="mt-2"></songs-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from '@/components/Songs/SongsPanel.vue'
import SongsSearchPanel from '@/components/Songs/SongsSearchPanel.vue'
import SongsService from '@/services/SongsService'
import SongsBookmarks from '@/components/Songs/SongsBookmarks.vue'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 100%;
  margin: q auto;
}

.image-container {
  max-width: 300px;
  overflow: hidden;
}
</style>

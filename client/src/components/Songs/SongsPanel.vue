<template>
  <panel title="Songs">
    <v-btn
      slot="action"
      to="/songs/create"
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>
    <div
      class="song"
      v-for="song in songs" :key="song.id">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{ song.title }}
          </div>
          <div class="song-artist">
            {{ song.artist }}
          </div>
          <div class="song-genre">
            {{ song.genre }}
          </div>
          <v-btn
            class="cyan"
            dark
            :to="{
              name: 'Song',
              params: {
                songId: song.id
              }
            }">
            View
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <v-container class="image-container">
            <v-img
              class="album-image"
              max-width="100%"
              max-height="100%"
              contain
              :src="song.albumImageUrl"></v-img>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
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

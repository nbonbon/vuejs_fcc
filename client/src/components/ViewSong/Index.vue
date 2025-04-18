<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>
      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs6>
        <tabs :song="song" />
      </v-flex>
      <v-flex xs6>
        <lyrics :lyrics="song.lyrics"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from '@/components/ViewSong/SongMetadata.vue'
import YouTube from '@/components/ViewSong/YouTube.vue'
import Lyrics from '@/components/ViewSong/Lyrics.vue'
import Tabs from '@/components/ViewSong/Tabs.vue'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tabs
  },
  data () {
    return {
      song: {}
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    isUserLoggedIn () {
      return this.$store.state.isUserLoggedIn
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId,
        userId: this.user.id
      })
    }
  }
}
</script>

<style scoped>
.tab-area {
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>

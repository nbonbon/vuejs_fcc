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
    <v-layout>
      <v-flex xs6>
        <panel title="Tabs">
        <v-textarea
            class="tab-area"
            label="Tab"
            readonly
            textarea
            rows="32"
            outlined
            v-model="song.tab" />
        </panel>
      </v-flex>
      <v-flex xs6>
        <lyrics :lyrics="song.lyrics"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
import SongMetadata from '@/components/ViewSong/SongMetadata.vue'
import YouTube from '@/components/ViewSong/YouTube.vue'
import Lyrics from '@/components/ViewSong/Lyrics.vue'

export default {
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics
  },
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
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

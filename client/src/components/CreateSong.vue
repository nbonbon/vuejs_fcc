<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title" />

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist" />

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre" />

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album" />

        <v-text-field
          label="Album Image URL"
          required
          :rules="[required]"
          v-model="song.albumImageUrl" />

        <v-text-field
          label="YouTube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId" />
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure">
        <v-textarea
          label="Tab"
          textarea
          rows="6"
          outlined
          required
          :rules="[required]"
          v-model="song.tab" />

        <v-textarea
          label="Lyrics"
          textarea
          rows="6"
          outlined
          required
          :rules="[required]"
          v-model="song.lyrics" />
      </panel>

      <div class="danger-alert" v-if="error">
        {{ error }}
      </div>
      <v-btn
        dark
        class="cyan mt-5"
        @click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null

      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'Songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>

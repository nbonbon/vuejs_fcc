<template>
  <panel title="Song Metadata">
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
            name: 'songs-edit',
            params: {
              songId: song.id
            }
          }">Edit</v-btn>

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          class="cyan"
          dark
          @click="setAsBookmark"
          >Set as Bookmark</v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          class="cyan"
          dark
          @click="unsetAsBookmark"
          >Unset as Bookmark</v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl"/>
        <br />
        {{ song.album }}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import BookmarkService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    isUserLoggedIn () {
      return this.$store.state.isUserLoggedIn
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmark = (await BookmarkService.index({
        songId: this.song.id,
        userId: this.$store.state.user.id
      })).data
      console.log(this.isBookmarked)
    }
  },
  methods: {
    async setAsBookmark () {
      const bookmark = {
        songId: this.song.id,
        userId: this.$store.state.user.id
      }
      this.bookmark = (await BookmarkService.post(bookmark)).data
    },
    async unsetAsBookmark () {
      try {
        await BookmarkService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
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
  width: 70%;
  margin: 0 auto;
}
</style>

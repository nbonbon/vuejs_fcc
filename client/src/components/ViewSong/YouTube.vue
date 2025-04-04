<template>
  <panel title="YouTube Video">
    <h1>{{ youtubeId }}</h1>
    <youtube
      :video-id="youtubeId"
      :player-width="600"
      :player-height="400">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>

</style>

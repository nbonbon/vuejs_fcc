<template>
  <panel title="Lyrics">
    <v-textarea
      class="tab-area"
      label="lyrics"
      readonly
      textarea
      rows="32"
      outlined
      v-model="lyrics" />
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'lyrics'
  ]
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

<template>
  <panel title="Tabs">
    <v-textarea
      class="tab-area"
      label="tabs"
      readonly
      textarea
      rows="32"
      outlined
      v-model="song.tab" />
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'song'
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

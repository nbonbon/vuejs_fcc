<template>
  <v-layout column class="pl-4 pr-4">
    <v-flex xs6>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <slot name="action"></slot>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <slot>
            No slot content defined.
          </slot>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>

<template>
<p> {{ thime.date.value }} </p>
</template>

<script setup lang="ts">
defineProps<{ thime: ReturnType<typeof useThime> }>();
</script>

<style lang="sass" scoped>
p
  font-size: xxx-large
  justify-self: center
</style>
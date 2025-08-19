<template>
<NuxtPage :thime="thime" />
</template>

<script setup lang="ts">
import { useThime } from '~/composables/useThime';
const thime = useThime();
</script>
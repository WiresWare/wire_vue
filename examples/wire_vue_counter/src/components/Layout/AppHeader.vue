<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  version?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="mb-8 text-center">
    <h1 class="mb-2 text-4xl font-bold text-gray-800">
      {{ title }}
    </h1>
    <p class="text-gray-600">
      {{ description }}
      <span class="ml-2 text-sm font-normal text-gray-400">v{{ version }}</span>
    </p>
  </div>
</template>

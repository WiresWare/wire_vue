<script setup lang="ts">
interface Props {
  title: string;
  description: string;
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
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="card bg-white">
    <h2 v-if="title" class="mb-3 text-xl font-semibold text-gray-700">
      {{ title }}
    </h2>
    <div class="flex flex-col items-center">
      <slot />
    </div>
  </div>
</template>

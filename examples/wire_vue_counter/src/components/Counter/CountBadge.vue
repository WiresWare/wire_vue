<script setup lang="ts">
interface Props {
  count: number | unknown;
}

defineProps<Props>();
</script>

<template>
  <div class="text-center">
    <div class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
      <div class="mr-2 h-2 w-2 rounded-full bg-green-500" />
      Count: {{ count }}
    </div>
  </div>
</template>

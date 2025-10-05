<script setup lang="ts">
interface Props {
  hasData: boolean;
  count?: number | unknown;
}

defineProps<Props>();
</script>

<template>
  <div class="text-center">
    <div class="mb-2 text-3xl font-bold text-blue-600">
      {{ hasData ? count : 'no data' }}
    </div>
    <div class="text-sm text-gray-500">
      {{ hasData ? 'Data available' : 'No data set' }}
    </div>
  </div>
</template>

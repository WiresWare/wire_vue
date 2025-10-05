<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  count?: number;
  hasValue: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
});

const isEven = computed(() => props.hasValue && props.count % 2 === 0);
</script>

<template>
  <div v-if="hasValue" class="flex items-center justify-center space-x-2">
    <div class="flex items-center text-sm">
      <div
        class="mr-2 h-3 w-3 rounded-full transition-colors duration-300"
        :class="isEven ? 'bg-blue-500' : 'bg-green-500'"
      />
      <span class="text-gray-600">
        {{ count }} is {{ isEven ? 'even' : 'odd' }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  count?: number;
  hasValue: boolean;
  target?: number;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  target: 10,
});

const progressPercentage = computed(() => {
  if (!props.hasValue || props.count <= 0) return 0;
  return Math.min((props.count / props.target) * 100, 100);
});

const currentProgress = computed(() => Math.min(props.count, props.target));
</script>

<template>
  <div v-if="hasValue && count > 0" class="mt-4">
    <div class="mb-1 text-xs text-gray-500">
      Progress to {{ target }}
    </div>
    <div class="h-2 w-full rounded-full bg-gray-200">
      <div
        class="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"
        :style="{ width: `${progressPercentage}%` }"
      />
    </div>
    <div class="mt-1 text-xs text-gray-500">
      {{ currentProgress }} / {{ target }}
    </div>
  </div>
</template>

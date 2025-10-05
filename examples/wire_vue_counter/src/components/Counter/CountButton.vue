<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  count?: number | undefined;
  hasValue: boolean;
}>();
const emit = defineEmits<{
  (e: 'increment'): void;
}>();

const isEven = computed(() => props.hasValue && props.count! % 2 === 0);

const onClick = () => {
  emit('increment');
};
</script>

<template>
  <button
    class="btn-primary group relative min-w-48 transform overflow-hidden px-8 py-3 text-lg transition-all duration-200 hover:scale-105 active:scale-95"
    :class="{
      'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700': hasValue && isEven,
      'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700': hasValue && !isEven,
    }"
    @click="onClick"
  >
    <span class="relative z-10 font-semibold">
      Count is {{ hasValue ? count : "not set" }}
    </span>

    <!-- Ripple effect -->
    <div class="absolute inset-0 rounded bg-white opacity-0 transition-opacity duration-150 group-active:opacity-20" />
  </button>
</template>

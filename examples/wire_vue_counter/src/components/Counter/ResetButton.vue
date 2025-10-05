<script setup lang="ts">
const emit = defineEmits<{
  (e: 'reset'): void;
}>();

const onClick = () => {
  emit('reset');
};
</script>

<template>
  <button
    w="full"
    rounded="md"
    bg="transparent"
    p="x-3 y-1.5"
    font="normal"
    text="red-600 sm"
    transition="all"
    duration="200"
    hover="bg-red-50 text-red-700"
    focus="outline-none ring-2 ring-red-400 ring-offset-1"
    active="scale-98"
    @click="onClick"
  >
    Reset Counter
  </button>
</template>

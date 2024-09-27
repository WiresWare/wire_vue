<script setup lang="ts">
import { computed, ref } from 'vue';
import { Wire } from 'wire-ts';
import DataKeys from '@/constants/DataKeys';
import Signals from '@/constants/Signals';

defineProps<{ title: string }>();
const wdCount = Wire.data(DataKeys.COUNT);
const count = ref<number | undefined>(wdCount.value);
const hasValue = computed(() => !!count.value);
wdCount.subscribe((value) => count.value = value);
const onClick = () => {
  console.log('> CountButton -> onClick');
  Wire.send(Signals.COUNT);
};
</script>

<template>
  <div>
    <small>{{ title }}</small>
  </div>
  <button @click="onClick">
    count is {{ hasValue ? count : "not set" }}
  </button>
</template>

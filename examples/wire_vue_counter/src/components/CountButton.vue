<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Wire } from 'cores.wire';
import DataKeys from '@/constants/DataKeys';

defineProps<{ msg: string }>();
const count = ref<number | undefined>(Wire.data(DataKeys.COUNT).value);
const hasValue = computed(() => count.value != null && count.value !== undefined);
watch(count, (value?: number) => Wire.data(DataKeys.COUNT, value!));
const onClick = () => {
  if (count.value == undefined) {
    count.value = 0;
  } else count.value++;
};
</script>

<template>
  <div>{{ msg }}</div>
  <button
    type="button"
    @click="onClick"
  >
    count is {{ hasValue ? count : "not set" }}
  </button>
</template>

<script setup lang="ts">
import CountButton from './components/CountButton.vue';
import DataKeys from './constants/DataKeys.ts';

</script>

<template>
  <WireData
    v-slot="{ has, data }"
    :for="DataKeys.COUNT"
    :when="() => true"
  >
    <h1>{{ has ? data : 'no data' }}</h1>
  </WireData>
  <WireData :for="DataKeys.COUNT" :when="() => true">
    <template #default="{ data }">
      <h1>{{ data }}</h1>
    </template>
    <template #undefined>
      <p>Value is undefined</p>
    </template>
  </WireData>
  <CountButton title="Increase" />
</template>

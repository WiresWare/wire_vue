<script setup lang="ts">
import CountButton from './components/CountButton.vue';
import DataKeys from './constants/DataKeys.ts';

</script>

<template>
  <WireData :for="DataKeys.COUNT" :when="() => true">
    <template #default="{ data }">
      <h1>{{ data }}</h1>
    </template>
    <template #undefined>
      <p>Value is not set</p>
    </template>
  </WireData>
  <CountButton title="Increase" />
</template>

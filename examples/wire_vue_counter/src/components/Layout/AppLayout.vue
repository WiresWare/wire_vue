<script setup lang="ts">
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    <div class="wire-vue-counter w-full max-w-md">
      <slot name="header" />
      <div class="space-y-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wire-vue-counter {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

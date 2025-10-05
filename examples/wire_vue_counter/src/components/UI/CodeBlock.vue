<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github-dark.css';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('vue', xml); // Vue uses XML/HTML syntax

interface Props {
  code: string;
  language?: string;
}

const props = withDefaults(defineProps<Props>(), {
  language: 'vue',
});

const codeRef = ref<HTMLElement | null>(null);

const highlightCode = () => {
  if (codeRef.value) {
    codeRef.value.removeAttribute('data-highlighted');
    hljs.highlightElement(codeRef.value);
  }
};

onMounted(() => {
  highlightCode();
});

watch(() => props.code, () => {
  highlightCode();
});
</script>

<template>
  <div class="code-block-wrapper mt-3">
    <div class="code-header flex items-center justify-between border-b border-gray-700 bg-gray-800 px-3 py-2">
      <span class="font-mono text-xs text-gray-400">{{ language }}</span>
    </div>
    <pre class="code-pre"><code
      ref="codeRef"
      :class="`language-${language}`"
      class="hljs"
    >{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.code-block-wrapper {
  @apply rounded-lg overflow-hidden border border-gray-700;
}

.code-pre {
  @apply m-0 p-3 bg-gray-900 text-sm overflow-x-auto;
}

.code-pre code {
  @apply block font-mono text-sm leading-relaxed;
}

/* Override highlight.js default background */
.code-pre :deep(.hljs) {
  background: transparent;
  padding: 0;
}
</style>

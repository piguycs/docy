<template>
  <main class="codeblock m-2 grid bg-palenight text-slate-200 rounded-lg w-full max-w-4xl">
    <div>
      <div class="filename py-1 px-2 bg-slate-700 rounded-tl-lg w-fit">
        <slot name="file" />
      </div>
      <div id="copy_target" class="p-3 font-mono">
        <slot name="code" />
      </div>
    </div>
    <div class="p-3 cursor-pointer select-none invisible" @click="copy">copy</div>
  </main>
</template>

<script lang="ts" setup>
function copy() {

}
  

</script>

<style scoped>
@font-face {
  font-family: 'firacode';
  src: url(assets/fonts/nf.woff);
}
main {
  grid-template-areas: "a b";
  grid-template-columns: 1fr max-content;
}

.codeblock:hover .invisible {
  @apply visible;
}

:slotted(p) {
  @apply p-1 text-lg leading-3;
}

</style>

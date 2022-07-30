<template>
  <main
    class="codeblock m-2 grid bg-palenight text-slate-200 rounded-lg w-full max-w-4xl"
  >
    <div>
      <div class="filename py-1 px-2 bg-palenight2 rounded-tl-lg w-fit">
        {{ filename }}
      </div>
      <div id="copy_target" class="p-3 font-mono">
        <Markdown />
      </div>
    </div>
    <div class="p-3 cursor-pointer select-none invisible" @click="copy">copy</div>
  </main>
</template>

<script lang="ts" setup>
defineProps(["filename"]);

const copy = async (e:Event) => {
  const el:any = e.target
  const str = el.parentElement.querySelector("code").innerText
  
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    // clipboard api
    await navigator.clipboard.writeText(str);
  } else {
    // fallback when clipboard api not present
    const textarea = document.createElement("textarea");
    textarea.value = str;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  
  el.innerHTML = "copied"
  
  setTimeout(() => {
    el.innerHTML = "copy"
  }, 800)

};
</script>

<style lang="scss">
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>

<style lang="scss" scoped>
@font-face {
  font-family: "firacode";
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

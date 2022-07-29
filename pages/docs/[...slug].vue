<template>
  <main id="root" class="font-docs">
    <nav
      id="top"
      class="px-60 text-2xl font-sans font-bold py-4 cursor-pointer"
    >
      TCore.js Docs
    </nav>
    <div id="indexnav" class="pl-60 flex flex-col py-5">
      <ContentList path="/" v-slot="{ list }">
        <h1 class="text-2xl">Contents</h1>
        <span
          v-for="page in list"
          class="cursor-pointer font-medium text-lg text-slate-300 hover:text-slate-50 w-max rounded-md p-2 select-none"
          :class="currPage(page._path) ? 'bg-highlight' : ''"
          @click="$router.push(`/docs${page._path}`)"
          :key="page._path"
        >
          {{ page.title }}
        </span>
      </ContentList>
    </div>
    <div
      id="mdparent"
      style="grid-area: mid"
      class="overflow-y-scroll overflow-x-hidden p-5 pb-12"
    >
      <ContentRenderer :value="data" id="md" />
    </div>
  </main>
</template>

<script lang="ts" setup>
const route = useRoute();
const page = route.params.slug.length
  ? route.params.slug.toString().replace(",", "/")
  : "";
const indexHighlight = ref(`/${page}`);

const data = await queryContent(`/${page}`).findOne();

const currPage = (e: string) => {
  return (
    e === indexHighlight.value ||
    (e === "/first-steps/getting-started" && indexHighlight.value === "/")
  );
};

const modify = (element: keyof HTMLElementTagNameMap, pre = "", post = "") => {
  const el = document.getElementsByTagName("");
  for (let index = 0; index < el.length; index++) {
    const curr = el[index];
    curr.innerHTML = `${pre}${curr.innerHTML}${post}`;
  }
};

onMounted(() => {
  // refresh();
});
</script>

<style lang="scss">
main#root {
  @apply bg-midnight text-slate-300 h-screen grid pb-4;
  grid-template-areas:
    "nav   nav  nav"
    "left  mid  right";
  grid-template-rows: 6rem 1fr;
  grid-template-columns: 0.47fr 1fr 0.47fr;
}

#mdparent::-webkit-scrollbar {
  display: none;
}

@media only screen and (max-width: 88rem) {
  main#root {
    grid-template-areas:
      "nav   nav"
      "left  mid";
    grid-template-columns: 0.5fr 1fr;
  }
}
@media only screen and (max-width: 63rem) {
  main#root {
    grid-template-areas:
      "nav"
      "mid";
    grid-template-columns: 1fr;
  }

  #indexnav {
    display: none;
  }

  nav {
    padding-left: 0 !important;
  }
}

nav#top {
  grid-area: nav;
}

#root #id {
  grid-area: mid;
}

h1 {
  @apply text-5xl px-2 py-3 font-extrabold;
}

h1 + p {
  @apply text-slate-400;
}

h2 {
  @apply text-2xl px-2 py-3 font-extrabold cursor-pointer;

  a {
    @apply text-slate-200 hover:no-underline;
  }
}
p {
  @apply text-xl px-2 py-3 font-medium leading-8;
}

ul {
  @apply list-disc list-inside;
}

li {
  @apply text-lg px-2 font-medium;
}

a {
  @apply text-blue-400 hover:underline;
}
</style>

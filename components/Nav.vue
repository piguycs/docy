<template>
  <nav
    id="top"
    class="px-60 text-2xl font-sans font-bold py-4 cursor-pointer flex flex-row items-center"
  >
    <IconNav />
    <!-- This has to be auth, but for now TODO -->
    <span class="mx-auto">
      <ContentNavigation v-slot="{ navigation }">
        <NuxtLink
          class="link"
          v-for="link of navigation"
          :key="link._path"
          :to="'/docs' + link._path"
          >{{ link.title }}</NuxtLink
        >
      </ContentNavigation>
    </span>
    <span class="icons">
      <span>gh</span>
      <span>gh</span>
      <span>gh</span>
      <span>gh</span>
    </span>
  </nav>
</template>

<style lang="scss" scoped>
.link {
  @apply m-5 font-medium font-sans text-xl text-slate-300 hover:text-slate-200;
}
</style>

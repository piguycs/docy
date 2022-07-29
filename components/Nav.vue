<template>
  <nav
    id="top"
    class="px-60 text-2xl font-sans font-bold py-4 cursor-pointer flex flex-row items-center"
  >
    <IconNav />
    <!-- This has to be auth, but for now TODO -->
    <span class="mx-auto">
      <span class="link">Getting Started</span>
      <span class="link">API</span>
      <span class="link">Examples</span>
      <span class="link">Issues</span>
      <span class="link">sAPI</span>
      <span class="link">Asgard API</span>
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

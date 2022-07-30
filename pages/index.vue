<template>
  <div id="root" class="font-sans h-screen px-64 bg-midnight grid">
    <nav class="text-white py-5 grid grid-cols-2 text-4xl max-h-20">
      <span class="font-bold flex flex-row items-center gap-2">
        <span class="mx-3 cursor-pointer">Tcore.js</span>
        <Search />
      </span>
      <span class="justify-self-end text-2xl font-medium">
        <span class="mx-3 cursor-pointer hover:text-blue-400">Deploy</span>
        <NuxtLink to="/docs">
          <span class="mx-3 cursor-pointer hover:text-blue-400">Docs</span>
        </NuxtLink>
        <span class="mx-3 cursor-pointer hover:text-blue-400">FAQ</span>
      </span>
    </nav>

    <div class="grid content-center h-fit justify-self-center pt-56">
      <span class="text-center text-2xl">
        ✌️
        <span class="bg-gradient-to-r text-green-300 font-medium"
          >Coming SOON</span
        >
        ✌️
      </span>
      <span
        class="mx-3 font-black text-7xl bg-gradient-to-r from-grad1 to-grad2 bg-clip-text text-transparent pb-3 text-center"
      >
        Native APIs brought to the WEB
      </span>
      <span class="mx-3 text-neptune text-center text-2xl pt-5">
        A messenger for TCore - let's JS communicate with the device and other
        apps
      </span>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=DM+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");

#root {
  grid-template-rows: 7rem 1fr;
}

a {
  @apply text-slate-50;
  &:hover {
    @apply no-underline;
  }
}
</style>

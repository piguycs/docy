<template>
  <div id="root" class="font-sans h-screen px-64 bg-midnight grid">
    <nav class="text-white py-5 grid grid-cols-2 text-4xl max-h-20">
      <span class="font-bold">
        <span class="mx-3 cursor-pointer">Tcore.js</span>
        <!-- <span class="mx-3 cursor-text text-neptune font-normal text-2xl">Search</span> -->
      </span>
      <span class="justify-self-end text-2xl font-medium">
        <span class="mx-3 cursor-pointer hover:text-blue-400">Deploy</span>
        <span class="mx-3 cursor-pointer hover:text-blue-400">Docs</span>
        <span class="mx-3 cursor-pointer hover:text-blue-400">FAQ</span>
      </span>
    </nav>

    <div class="grid content-center h-fit justify-self-center pt-56">
      <span class="text-center text-2xl ">
        ✌️
        <span class="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent font-medium">Coming
          SOON</span>
        ✌️
      </span>
      <span class="mx-3 font-black text-7xl bg-gradient-to-r from-grad1 to-grad2 bg-clip-text text-transparent">
        DEPLOY LIKE MAGIC
      </span>
      <span class="mx-3 text-neptune text-center text-3xl pt-5">
        One central API, CDN, permissions<br>manager and control center
      </span>
    </div>



  </div>
</template>

<script lang="ts">
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

#root {
  grid-template-rows: 7rem 1fr;
}
</style>
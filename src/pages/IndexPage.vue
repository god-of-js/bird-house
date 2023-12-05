<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="mx-auto h-[90%] w-fit flex flex-col items-center justify-center text-center">
    <h1 class="mb-4">
      Home
    </h1>

    <router-link to="/overview">
      <TheButton>
        Go to Overview
        <span i-carbon-arrow-right />
      </TheButton>
    </router-link>
  </div>
</template>

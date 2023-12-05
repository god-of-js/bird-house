<script setup lang="ts">
const currentRoute = useRoute()
const routes = [
  {
    path: '/',
    icon: 'i-carbon-home',
  },
  {
    path: '/overview',
    icon: 'i-carbon-grid',
  },

]
</script>

<template>
  <ul class="flex flex-col gap-3 bg-gray-700 px-4 py-5">
    <router-link v-for="route in routes" :key="route.path" class="rounded-lg p-3 hover:bg-primary hover:text-white" :class="route.path === currentRoute.path ? 'bg-primary text-white' : 'text-gray-500'" :to="route.path">
      <li :class="route.icon" />
    </router-link>
  </ul>
</template>

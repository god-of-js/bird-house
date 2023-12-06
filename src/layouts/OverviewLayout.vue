<script setup lang="ts">
import { useAppStore } from '~/modules'

const appStore = useAppStore()

appStore.getBirdHouses()
</script>

<template>
  <div class="h-[90%] flex">
    <AppSidebar />
    <router-view />
  </div>
</template>

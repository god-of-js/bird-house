<script setup lang="ts">
interface Props {
  totalPages: number
  currentPage: number
}
const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'change-page', val: number): void }>()
const visibleItems = computed(() => {
  const totalPages = props.totalPages
  const currentPage = props.currentPage
  const totalPagesArr = Array.from({ length: totalPages }, (_, index) => index + 1)

  if (totalPages <= 5)
    return totalPagesArr

  const visiblePages: (number | string)[] = [1]

  if (currentPage > 1 && currentPage < totalPages - 1) {
    visiblePages.push('...', currentPage)
  }
  else if (currentPage === 1) {
    const startIndex = Math.floor((totalPagesArr.length - 3) / 2)
    totalPagesArr.slice(startIndex, startIndex + 3)
    visiblePages.push('...', ...totalPagesArr.slice(startIndex, startIndex + 3), '...')
  }

  else if (currentPage === totalPages - 1) {
    visiblePages.push(currentPage)
  }

  visiblePages.push(totalPages)

  return visiblePages
})

function changePage(item: number | string, index: number) {}
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0 flex flex items-center justify-center gap-6.5 bg-gray-700 p-3.5">
    <button :disabled="props.currentPage === 1" @click="emit('change-page', props.currentPage - 1)">
      <TheIcon icon="CaretLeft" />
    </button>
    <button v-for="(item, index) in visibleItems" :key="index" @click="changePage(item, index)">
      {{ item }}
    </button>
    <button :disabled="props.currentPage === props.totalPages" @click="emit('change-page', props.currentPage + 1)">
      <TheIcon icon="CaretRight" />
    </button>
  </div>
</template>

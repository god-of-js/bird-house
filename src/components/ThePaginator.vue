<script setup lang="ts">
interface Props {
  totalPages: number
  currentPage: number
}
const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'changePage', val: number): void }>()

const visibleItems = computed(() => {
  const totalPages = props.totalPages
  const currentPage = props.currentPage
  const totalPagesArr = Array.from({ length: totalPages }, (_, index) => index + 1)

  if (totalPages <= 7)
    return totalPagesArr

  const visiblePages: number[] = [1]

  if (currentPage === 1) {
    const startIndex = Math.floor((totalPagesArr.length - 3) / 2)
    const middleValues = totalPagesArr.slice(startIndex, startIndex + 3)
    visiblePages.push(...middleValues)
  }
  else if (currentPage <= 3) {
    const midIndex = Math.floor(totalPagesArr.length / 2)
    visiblePages.push(...totalPagesArr.slice(1, 3), totalPagesArr[midIndex])
  }
  else if (currentPage > 3 && currentPage < totalPages - 5) {
    const currentPageIndex = totalPagesArr.findIndex(page => page === currentPage)
    visiblePages.push(...totalPagesArr.slice(currentPageIndex, currentPageIndex + 3))
  }
  else if (currentPage >= totalPages - 5) {
    const startIndex = totalPagesArr.length - 5
    const endValues = totalPagesArr.slice(startIndex, startIndex + 4)
    visiblePages.push(...endValues)
  }

  visiblePages.push(totalPages)

  return insertDots([...visiblePages, currentPage])
})

function insertDots(arr: number[]) {
  const sortedArray = [...new Set(arr.sort((a, b) => a - b))]

  const resultArray = sortedArray.reduce((acc, num, index) => {
    acc.push(num)

    if (index < sortedArray.length - 1 && num + 1 !== sortedArray[index + 1])
      acc.push('...')

    return acc
  }, [] as (string | number)[])

  return resultArray
}

function changePage(item: number | string, itemIndex: number) {
  if (typeof item === 'number') {
    emit('changePage', item)
    return
  }

  const prevItem = visibleItems.value[itemIndex - 1]

  if (typeof prevItem === 'number')
    emit('changePage', prevItem + 1)
}
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0 flex flex items-center justify-center gap-4 bg-gray-700 p-3.5">
    <button
      :disabled="props.currentPage <= 1"
      data-testid="prev-btn"
      @click="emit('changePage', props.currentPage - 1)"
    >
      <TheIcon icon="CaretLeft" />
    </button>
    <button
      v-for="(item, index) in visibleItems"
      :key="index"
      class="rounded-md px-3 py-1 hover:bg-primary"
      :data-testid="`item-${item}-${index}`"
      :class="{ 'bg-primary': item === props.currentPage }"
      @click="changePage(item, index)"
    >
      {{ item }}
    </button>
    <button
      :disabled="props.currentPage >= props.totalPages"
      data-testid="next-btn"
      @click="emit('changePage', props.currentPage + 1)"
    >
      <TheIcon icon="CaretRight" />
    </button>
  </div>
</template>

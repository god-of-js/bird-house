<script setup lang="ts">
interface Tab {
  key: string
  label?: string
}
interface Props {
  tabs: Tab[]
  activeTab: string
}
const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'change-tab', val: string): void }>()
</script>

<template>
  <ul class="font-popins flex items-center gap-8">
    <li
      v-for="(tab, index) in props.tabs"
      :key="index"
      class="cursor-pointer border-b-2 px-2 pb-3 text-base font-normal text-gray-500 hover:border-primary hover:text-primary"
      :class="props.activeTab === tab.key ? 'border-primary text-primary' : 'border-transparent'"
      tabindex="1"
      @click="emit('change-tab', tab.key)"
      @keydown.enter="emit('change-tab', tab.key)"
    >
      <!-- Using a slot incase of icons -->
      <slot :name="tab.key">
        {{ tab.label }}
      </slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Egg from './icons/egg.svg'
import Grid from './icons/grid.svg'
import Home from './icons/home.svg'
import Paw from './icons/paw.svg'
import CaretLeft from './icons/caret-left.svg'
import CaretRight from './icons/caret-right.svg'
import ArrowLeft from './icons/arrow-left.svg'
import Location from './icons/location.svg'

const props = defineProps<Props>()
const icons = {
  Egg,
  Grid,
  Home,
  Paw,
  ArrowLeft,
  Location,
  CaretRight,
  CaretLeft,
}
export type Icons = keyof typeof icons
interface Props {
  icon: Icons
}
</script>

<template>
  <component :is="icons[props.icon]" />
</template>

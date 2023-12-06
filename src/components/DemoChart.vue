<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const chartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 8],
      borderWidth: 1,
    },
    {
      label: '# of People',
      data: [13, 2, 4, 5, 2, 3, 8],
      borderWidth: 1,
    },
  ],
}

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

const myChart = ref(null)

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const ctx = myChart.value?.getContext('2d')
  // eslint-disable-next-line no-new
  new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions,
  })
})
</script>

<template>
  <div>
    <canvas ref="myChart" />
  </div>
</template>

<script setup lang="ts">
import CafesView from './CafesView.vue'
import CafesForm from './CafesForm.vue'
import type { Cafe } from './CafesForm.vue'

const handleClick = (cafes: Cafe) => {
  console.log(cafes)
}
</script>

<template>
  <Suspense>
    <CafesView />
    <template #fallback> Loading... </template>
  </Suspense>
  <CafesForm @add-cafe="handleClick" />
</template>

<style scoped></style>

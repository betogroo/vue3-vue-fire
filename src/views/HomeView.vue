<script lang="ts" setup>
import { useFirestore } from 'vuefire'
const db = useFirestore()
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const colRef = collection(db, 'purchase')

const purchases = useCollection(colRef)
</script>

<template>
  <h1 class="text-center">Home</h1>
  <h3>{{ purchases }}</h3>
</template>

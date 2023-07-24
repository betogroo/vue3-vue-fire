<script lang="ts" setup>
import { collection, query, getDocs, onSnapshot } from 'firebase/firestore'
import { ref } from 'vue'
import { useFirestore, useCollection } from 'vuefire'
const db = useFirestore()
const colRef = collection(db, 'cafes')
//const q = query(collection(db, 'cafes'))

//const querySnapshot = await getDocs(q)
const cafes = useCollection(colRef)
/* const unsubscribe = onSnapshot(q, (querySnapshot) => {
  cafes.value = []
  querySnapshot.forEach((doc) => {
    cafes.value.push({ ...doc.data(), id: doc.id })
  })
}) */
</script>

<template>
  <div>{{ cafes }}</div>
</template>

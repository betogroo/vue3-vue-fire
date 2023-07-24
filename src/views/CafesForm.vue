<script setup lang="ts">
import { ref } from 'vue'

export interface Cafe {
  name: string
  rating: number
  location: string
  price: number
  favorite: boolean
}
const emit = defineEmits<{
  addCafe: [cafe: Cafe]
}>()

const cafes = ref<Cafe>({
  name: '',
  rating: 0,
  location: '',
  price: 0,
  favorite: false,
})

const handleSubmit = () => {
  emit('addCafe', cafes.value)
}
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-text-field v-model="cafes.name"></v-text-field>
    <v-text-field v-model="cafes.rating"></v-text-field>
    <v-text-field v-model="cafes.location"></v-text-field>
    <v-text-field v-model="cafes.price"></v-text-field>
    <v-switch
      v-model="cafes.favorite"
      color="primary"
      label="Favorite"
    ></v-switch>
    <v-btn type="submit">Gravar</v-btn>
  </v-form>
</template>

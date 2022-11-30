<template>
  <div>
    <Navbar />
    <div v-if="store.favorites.length === 0" class="p-10 text-2xl opacity-50 text-center">
      <p>No Favorites...</p>
    </div>
    <div v-for="symbol in values" class="">
      <div v-if="values.length > 0">
        <CoinPrice :symbol="symbol.sym" :price="symbol.price" />
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getPrice } from '../client';
import CoinPrice from '../components/CoinPrice.vue';
import Navbar from '../components/Navbar.vue';
import { useFavoritesStore } from '../stores/favorites';

const store = useFavoritesStore()
const values = ref<{ sym: string, price: number }[]>([])

onMounted(() => {
  store.favorites.forEach(async (sym) => {
    const price = await getPrice(sym)
    values.value.push({ sym, price })
  })
})

</script>

<style scoped>

</style>
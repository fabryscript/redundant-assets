<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getPrice } from '../client';
import CoinPrice from './CoinPrice.vue';

const values = ref<{sym: string, price: number}[]>([])

const _basicSymbols = [
  "bitcoin",
  "ethereum",
  "ripple",
  "litecoin",
  "bitcoin-cash",
  "eos"
]

onMounted(() => {
  _basicSymbols.forEach(async (sym) => {
    const price = await getPrice(sym)
    values.value.push({sym, price})
  })
})

</script>

<template>
  <div class="p-4">
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

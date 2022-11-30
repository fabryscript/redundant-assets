<template>
  <div class="text-lg w-100 p-5 bg-slate-50 my-2 rounded-xl flex-1 flex justify-between">
    <p>
      {{ symbol }}
    </p>
    <div class="mx-2 flex justify-start space-x-2">
      <p>
        ${{ price }}
      </p>
      <button :class="isSymbolFavorite ? 'text-red-500' : 'text-green-500'"
        @click="isSymbolFavorite ? store.removeFavorite(symbol) : store.addFavorite(symbol)">
        {{ isSymbolFavorite ? "Remove" : "Add" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useFavoritesStore } from "../stores/favorites"

const store = useFavoritesStore()
const isSymbolFavorite = computed(() => store.favorites.includes(symbol))

const {
  price,
  symbol
} = defineProps<{
  symbol: string,
  price: number
}>();
</script>

<style scoped>

</style>
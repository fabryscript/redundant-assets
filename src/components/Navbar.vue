<template>
  <div class="flex flex-row justify-between text-lg p-4">
    <router-link class="px-4 p-2 hover:scale-110 transition-all font-bold" to="/">
      RS
    </router-link>

    <div>
      <button
        class="font-bold hover:scale-110 transition-all mr-3 bg-slate-100 p-2 rounded-lg px-4 shadow-md hover:bg-slate-200 focus:bg-slate-300"
        @click="router.push(link.href)" v-for="link in links">
        {{ link.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { router } from '../router';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Favorites', href: '/favorites' },
];
</script>

<style scoped>

</style>
import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: [] as string[],
  }),
  actions: {
    addFavorite(fav: string) {
      this.favorites.push(fav)
    },
    removeFavorite(fav: string) {
      this.favorites = this.favorites.filter((f) => f !== fav)
    }
  }
})
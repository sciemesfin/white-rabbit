<template>
  <div class="p-3 md:p-0 w-full md:max-w-6xl mx-auto">
    <div class="p-2 md:py-10">
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
        <div
          class="shadow rounded cursor-pointer"
          v-for="album in filteredAlbums"
          :key="album.name"
        >
          <div>
            <img
              :src="album.image"
              class="card-img-top rounded-t w-full max-h-[200px]"
              alt="Album cover"
            />
            <div class="p-3">
              <h5 class="text-blue-600 font-bold">
                {{ album.name }}
              </h5>
              <p class="card-text">{{ album.artist }}</p>
              <p class="card-text">{{ album.date }}</p>
              <button
                class="btn btn-primary text-green-600 mt-4 text-sm text-center"
                @click="addToFavorites(album)"
              >
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";

interface Album {
  id: string;
  name: string;
  artist: string;
  image: string;
  date: Date;
}
export default defineComponent({
  setup() {
    const store = useStore();
    const albums = store.state.albums;
    const searchTerm = ref("");
    const filteredAlbums = computed(() => store.state.filteredAlbums);
    const loading = store.state.loading;
    const favorites = store.state.favorites;

    watch(searchTerm, (newValue) => {
      store.commit("updateSearchTerm", newValue);
    });

    const addToFavorites = (album: Album) => {
      store.commit("addToFavorites", album);
    };
    store.dispatch("fetchAlbums");

    return {
      albums,
      searchTerm,
      filteredAlbums,
      favorites,
      loading,
      addToFavorites,
    };
  },
});
</script>

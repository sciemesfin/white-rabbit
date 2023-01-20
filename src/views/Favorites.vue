<template>
    <div class="p-3 pt md:p-0 w-full md:max-w-6xl mx-auto">
     <div class="py-8">
      <router-link class="text-blue-600 flex items-center" to="/">
          <IconComponent w="6" h="6" path="back" />
      <span class="pl-3">Home</span>    
      </router-link>
     </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
  
        <div
          class="shadow rounded cursor-pointer"
          v-for="album in favorites.flat()"
          :key="album.name"
        >
          <div>
            <img
              :src="album.image"
              class="card-img-top rounded-t w-full max-h-[200px]"
              alt="Album cover"
            />
            <div class="card-body p-3">
              <h5 class="card-title text-blue-600 font-bold">
                {{ album.name }}
              </h5>
              <p class="card-text">{{ album.artist }}</p>
              <a href="#" class="btn text-red-600 mt-6" @click="deleteFavorite(album)"
                >Delete from favorite</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from "vue";
  import { useStore } from "vuex";
  import IconComponent from "../components/IconComponent.vue";
  
  interface Album {
    name: string;
    artist: string;
    image: string;
  }
  export default defineComponent({
      components:{IconComponent},
    setup() {
      const store = useStore();
      const favorites = computed(() => store.state.favorites);
      const deleteFavorite = (album: Album) => {
        store.commit("deleteFavorite", album);
      };
      store.commit("getFavorites");
      return {
        favorites,
        deleteFavorite,
      };
    },
  });
  </script>
  
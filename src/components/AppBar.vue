<template>
  <div class="p-3 md:p-5 border-b fixed bg-white w-full">
    <div class="w-full md:max-w-6xl mx-auto">
      <div class="flex space-x-2 md:space-x-10 justify-between items-center">
        <div>
          <img src="../assets/logo.png" class="h-6 md:h-10 max-w-16" alt="" />
        </div>
        <div class="w-full max-w-[400px]">
          <div
            class="flex items-center rounded-3xl px-5 bg-white border border-gray-300"
          >
          <IconComponent w="6" h="6" path="search" />
          
            <input
              v-model="searchTerm"
              type="text"
              id="voice-search"
              class="bg-white text-gray-900 text-sm w-full p-2 border-none focus:ring-0 focus:outline-none"
              placeholder="Search "
              required
            />
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <button
            class="md:flex md:items-center bg-blue-600 rounded text-white md:space-x-2 md:border p-1 md:p-2 md:px-5"
            @click="sortAlbum"
          >
            <span class="hidden md:block">Sort</span>
            <IconComponent w="6" h="6" path="sort" />
          </button>
          <button
            class="md:flex md:items-center bg-white border-blue-600 rounded text-blue-600 md:space-x-2 border p-1 md:p-2 md:px-5"
            @click="$router.push('favorite')"
          >
            <span class="hidden md:block">Favorite</span>
            <IconComponent w="6" h="6" path="favorite" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import IconComponent from "./IconComponent.vue";
const store = useStore();
const searchTerm = ref("");

watch(searchTerm, (newValue) => {
  store.commit("updateSearchTerm", newValue);
});


const sortAlbum = () => {
  store.dispatch("sortAlbums");
    };
</script>

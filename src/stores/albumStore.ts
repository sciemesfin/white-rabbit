import axios from "axios";
import { createStore } from "vuex";

interface Album {
  id: string;
  name: string;
  artist: string;
  image: string;
  date: Date;
}

const store = createStore({
  state: () => ({
    albums: [] as Album[],
    searchTerm: "" as string,
    favorites: [] as Album[],
    filteredAlbums: [] as Album[],
    loading: false as boolean,
  }),
  mutations: {
    updateAlbums(state, newAlbums) {
      state.albums = newAlbums;
      state.filteredAlbums = newAlbums;
    },
    updateSearchTerm(state, newSearchTerm) {
      state.searchTerm = newSearchTerm;
      const albums = state.albums;
      state.filteredAlbums = albums.filter((album: Album) =>
        album.name.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
    },
    setLoading(state, newValue) {
      state.loading = newValue;
    },
    addToFavorites(state, album) {
      const existingRawFavs = localStorage.getItem("favorite");
      const existingFavs = existingRawFavs ? JSON.parse(existingRawFavs) : [];
      const favs: any = [...existingFavs, album];

      localStorage.setItem("favorite", JSON.stringify(favs.flat()));
      state.favorites.push(favs);
    },
    getFavorites(state) {
      const favs = localStorage.getItem("favorite");
      state.favorites.push(favs ? JSON.parse(favs) : []);
    },
    sortAlbum(state) {
      const albums = state.albums;
      state.filteredAlbums = albums.sort(
        (objA, objB) => objA?.date?.getTime() - objB?.date?.getTime()
      );
    },
  },
  actions: {
    async fetchAlbums(context) {
      context.commit("setLoading", true);
      const response = await axios.get(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );
      const albums = response.data.feed.entry.map((entry: any) => ({
        id: entry.id.label,
        name: entry["im:name"].label,
        artist: entry["im:artist"].label,
        image: entry["im:image"][2].label,
        date: new Date(entry["im:releaseDate"].label),
      })) as Album[];
      context.commit("updateAlbums", albums);
      context.commit("setLoading", false);
    },
    sortAlbums(context) {
        context.commit("sortAlbum", false); 
    }
  },
});

export default store;

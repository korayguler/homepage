import { createStore } from 'vuex';
import axios from 'axios';
const store = createStore({
  state: () => ({
    galleryImages: [],
    allImages: [],
    githubRepositories: [],
    posts: [],
    userData: {},
    loading: false,
    windowWidth: window.innerWidth,
  }),
  actions: {
    async fetchGalleryImages({ commit }) {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/users/korayguler/photos?client_id=${
            import.meta.env.VITE_UNSPLASH_KEY
          }&per_page=100`,
        );
        commit(
          'setGalleryImages',
          response.data.map((item) => ({
            ...item,
            src: item.urls.regular,
            isHovered: false,
          })),
        );
      } catch (error) {}
    },

    async fetchRepositories({ commit }) {
      try {
        const response = await axios.get(
          'https://api.github.com/users/korayguler/repos?page=1&per_page=100',
        );
        commit('setGithubRepositories', response.data);
      } catch (error) {}
    },

    async fetchPosts({ commit }) {
      try {
        const response = await axios.get(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@korayguler',
        );
        commit('setPosts', response.data.items);
      } catch (error) {}
    },
    async fetchUserData({ commit }) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/data.json`,
        );
        commit('setUserData', response.data);
      } catch (error) {}
    },
  },
  mutations: {
    setGalleryImages(state, payload) {
      state.galleryImages = payload;
    },
    setGithubRepositories(state, payload) {
      state.githubRepositories = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setPosts(state, payload) {
      state.posts = payload;
    },
    setUserData(state, payload) {
      state.userData = payload;
    },
    setWindowWidth(state) {
      state.windowWidth = window.innerWidth;
    },
  },
  getters: {
    isMobile(state) {
      return state.windowWidth < 1023;
    },
  },
});

export default store;

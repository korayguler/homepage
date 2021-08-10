<template>
  <div
    class="
      fixed
      flex
      lg:flex-row
      xl:flex-row
      bg-111
      h-full
      overflow-auto
      w-full
    "
  >
    <app-sidebar />
    <app-loading v-if="loading" :is-loading="true" />
    <div
      class="
        w-full
        lg:mt-8
        xl:mt-8
        ml-8
        xl:ml-24
        lg:ml-24
        mr-8
        mt-28
        z-10
        relative
      "
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppSidebar from './components/layout/AppSidebar.vue';
import AppLoading from './components/layout/AppLoading.vue';
export default {
  components: { AppSidebar, AppLoading },
  name: 'App',
  computed: {
    ...mapState({
      loading: 'loading',
    }),
  },
};
</script>
<style>
@import 'https://unpkg.com/boxicons@2.0.8/css/boxicons.min.css';
@import 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;700;800;900&display=swap';

body {
  font-family: 'Nunito', sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #1d1b31;
}

::-webkit-scrollbar {
  width: 4px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #abe2ed;
}
</style>

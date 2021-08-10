<template>
  <app-container
    class="
      xl:w-16
      lg:w-16
      sm:h-16
      md:h-16
      xl:h-screen
      lg:h-screen
      bg-opacity-90 bg-1d1
      w-screen
      fixed
      z-30
      xl:py-5
      lg:py-5
      py-2
      px-8
      lg:px-0
      xl:px-0
    "
  >
    <div
      class="flex xl:flex-col lg:flex-col justify-between items-center h-full"
    >
      <div>
        <router-link to="/">
          <a
            class="
              w-12
              transition-all
              animate-pulse
              bg-111
              flex
              justify-center
              items-center
              h-12
              rounded-lg
            "
          >
            <h1 class="text-4xl text-white transform font-bold leading-none">
              K
            </h1>
          </a>
        </router-link>
      </div>
      <div class="flex lg:flex-col xl:flex-col justify-between gap-5">
        <router-link
          :to="navItem.url"
          v-for="(navItem, navIndex) in navs"
          :key="navIndex"
          v-show="navItem.show"
        >
          <div
            class="relative"
            @mouseover="navItem.isHovered = true"
            @mouseout="navItem.isHovered = false"
          >
            <a
              class="
                w-12
                h-12
                bg-111
                flex
                items-center
                justify-center
                rounded-lg
                hover:bg-white hover:text-1d1
                text-white
                transition-colors
                duration-300
                text-2xl
              "
              ><i :class="navItem.icon"></i>
            </a>
            <span
              class="
                transition-all
                duration-300
                absolute
                text-sm
                top-1/3
                left-10
                bg-1d1
                h-6
                flex
                items-center
                px-2
                rounded-md
                w-auto
                text-white
                pointer-events-none
              "
              :class="{
                'left-16': navItem.isHovered,
                'opacity-0': !navItem.isHovered,
              }"
              >{{ navItem.title }}</span
            >
          </div>
        </router-link>
      </div>
      <a
        :href="helperButtonAction.url"
        target="_blank"
        class="
          w-12
          h-12
          bg-111
          flex
          items-center
          justify-center
          rounded-lg
          hover:bg-white hover:text-1d1
          text-white
          transition-colors
          duration-300
          text-2xl
        "
      >
        <i class="bx" :class="helperButtonAction.icon"></i>
      </a>
    </div>
  </app-container>
</template>

<script>
import AppContainer from '@/components/layout/AppContainer.vue';

export default {
  components: {
    AppContainer,
  },
  data: () => ({
    navs: [
      {
        title: 'Home',
        icon: 'bx bx-home-smile',
        url: '/',
        isHovered: false,
        show: true,
      },

      {
        title: 'Projects',
        icon: 'bx bx-code-curly',
        url: '/projects',
        isHovered: false,
        show: true,
      },
      {
        title: 'Gallery',
        icon: 'bx bx-camera',
        url: '/gallery',
        isHovered: false,
        show: true,
      },
      {
        title: 'Blog',
        icon: 'bx bxl-blogger',
        url: '/blog',
        isHovered: false,
        show: false,
      },
    ],
    socials: [
      { icon: 'bx bxl-instagram' },
      { icon: 'bx bxl-linkedin' },
      { icon: 'bx bxl-github' },
      { icon: 'bx bxl-twitter' },
    ],
    selectedLogo: 0,
  }),
  computed: {
    helperButtonAction() {
      if (this.$route.path === '/') {
        return {
          icon: 'bxs-paper-plane',
          url: 'https://t.me/korayguler',
        };
      } else if (this.$route.path === '/gallery') {
        return {
          icon: 'bxl-unsplash',
          url: 'https://unsplash.com/korayguler',
        };
      } else if (this.$route.path === '/projects') {
        return {
          icon: 'bxl-github',
          url: 'https://github.com/korayguler',
        };
      }
    },
  },
};
</script>

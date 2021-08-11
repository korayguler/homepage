<template>
  <div
    class="
      w-full
      lg:w-16 lg:h-screen lg:bg-opacity-90
      bg-1d1
      w-screen
      fixed
      z-30
      lg:py-5
      py-2
      px-8
      lg:px-0
    "
  >
    <div class="flex lg:flex-col justify-between items-center h-full">
      <div>
        <router-link to="/">
          <a
            class="
              w-10
              h-10
              lg:w-12
              transition-all
              animate-pulse
              bg-111
              flex
              justify-center
              items-center
              lg:h-12
              rounded-lg
            "
          >
            <h1
              class="
                text-2xl text-white
                transform
                font-bold
                leading-none
                lg:text-4xl
              "
            >
              K
            </h1>
          </a>
        </router-link>
      </div>
      <div class="flex lg:flex-col justify-between lg:gap-5 gap-3">
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
                lg:w-12 lg:h-12
                h-10
                w-10
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
              v-if="!isMobile"
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
          lg:w-12 lg:h-12
          h-10
          w-10
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  components: {},
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
    ...mapGetters({ isMobile: 'isMobile' }),

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
  mounted() {
    console.log(this.isMobile);
  },
};
</script>

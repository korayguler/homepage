<template>
  <div v-if="!isLoading" class="flex lg:flex-row gap-8 flex-col pb-14">
    <div class="xl:w-1/4 lg:w-1/3 w-full flex-shrink-0">
      <div class="overflow-hidden rounded-xl">
        <img
          class="w-full pointer-events-none"
          :src="userData.avatar"
          alt="koray güler - front-end developer"
        />
      </div>

      <div class="flex flex-col mt-3 ml-2 gap-6 h-full">
        <span class="text-xl text-white">HI THERE !</span>

        <h1 class="text-3xl font-bold text-white">
          <span class="font-light text-gray-200">I'M</span>
          {{ userData.name?.toUpperCase() }}
        </h1>
        <p class="text-lg leading-relaxed text-white">
          {{ userData.description }}
        </p>

        <div class="flex justify-between flex-wrap items-center gap-3">
          <a
            :href="'mailto:' + userData.email"
            class="
              lg:px-4
              px-2
              h-10
              flex
              gap-2
              items-center
              border
              bg-white
              font-bold
              text-md
              rounded-lg
              hover:border-white hover:text-white hover:bg-transparent
              transition
              duration-200
            "
          >
            <span class="bx bx-download text-xl"></span>
            <span>Download CV</span>
          </a>
          <a
            :href="'mailto:' + userData.email"
            class="
              lg:px-4
              px-2
              h-10
              flex
              gap-2
              items-center
              border
              text-white
              border-white
              font-bold
              text-md
              rounded-lg
              hover:text-1d1 hover:border-1d1 hover:bg-white
              transition
              duration-200
            "
          >
            <span class="bx bx-mail-send text-xl"></span>
            <span>Contact</span>
          </a>
        </div>

        <div class="w-full flex justify-between gap-3">
          <a
            v-for="(social, i) in userData.socials"
            :href="social.url"
            target="_blank"
            :key="i"
            class="
              h-9
              lg:h-12
              w-full
              text-white
              border border-white
              rounded-lg
              lg:text-3xl
              text-xl
              flex
              items-center
              justify-center
              hover:bg-white hover:text-1d1 hover:border-1d1
              cursor-pointer
              transition
              duration-200
            "
            ><i class="bx" :class="social.icon"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col gap-4">
      <h1 class="text-4xl text-white font-bold">My Posts</h1>
      <a
        :href="post.link"
        target="_blank"
        v-for="(post, postIndex) in posts"
        :key="postIndex"
        class="
          w-full
          py-6
          px-8
          bg-purple-900 bg-opacity-80
          relative
          rounded-xl
          overflow-hidden
          transition
          duration-200
        "
        :class="{ 'transform hover:-translate-x-5 hover:scale-105': !isMobile }"
      >
        <div class="flex flex-col gap-3">
          <h1 class="md:text-2xl text-lg text-white">{{ post.title }}</h1>
          <p class="italic text-lg text-white">Author: {{ post.author }}</p>
          <div class="flex gap-2 justify-between">
            <div class="flex gap-2 flex-wrap">
              <span
                class="
                  py-0.5
                  px-1
                  bg-white
                  text-sm
                  font-semibold
                  text-black
                  rounded-md
                "
                v-for="(category, postIndex) in post.categories"
                :key="postIndex"
                >{{ category }}</span
              >
            </div>
          </div>
        </div>

        <span class="absolute top-2 right-3 text-white opacity-60">{{
          new Date(post.pubDate)
            .toLocaleDateString()
            .toString()
            .split('/')
            .join('.')
        }}</span>
        <img
          class="
            absolute
            w-full
            lg:h-auto
            top-0
            right-0
            left-0
            bottom-0
            filter
            blur-sm
            opacity-20
          "
          :src="post.thumbnail"
          alt=""
        />
      </a>
    </div>
  </div>
  <app-loading :is-loading="isLoading"></app-loading>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import AppLoading from '@/components/layout/AppLoading.vue';
export default {
  components: {
    AppLoading,
  },
  data: () => ({
    socials: [
      { icon: 'bxl-linkedin' },
      { icon: 'bxl-github' },
      { icon: 'bxl-unsplash' },
      { icon: 'bxl-medium' },
      { icon: 'bxl-twitter' },
    ],
    isLoading: true,
  }),
  computed: {
    ...mapState({ userData: 'userData', posts: 'posts' }),
    ...mapGetters({ isMobile: 'isMobile' }),
  },
  methods: {
    ...mapActions({ fetchPosts: 'fetchPosts', fetchUserData: 'fetchUserData' }),
  },
  async created() {
    await this.fetchUserData();
    await this.fetchPosts();
    let imageLoaded = 0;
    const img = new Image();
    img.src = this.userData.avatar;

    img.onload = () => {
      imageLoaded++;

      if (imageLoaded === 1) {
        this.isLoading = false;
      }
    };
  },
};
</script>

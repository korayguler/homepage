<template>
  <div
    v-if="!isLoading"
    class="
      xl:masonry-6-col
      lg:masonry-5-col
      md:masonry-3-col
      sm:masonry-2-col
      masonry-1-col
      box-border
      mx-auto
      before:box-inherit
      after:box-inherit
    "
  >
    <div
      @mouseover="hoveredImage(item.id, true)"
      @mouseout="hoveredImage(item.id, false)"
      @click="($event) => showImg($event, index)"
      id="image-card"
      :class="{
        'filter grayscale ': item.bw,
      }"
      class="
        relative
        break-inside
        mt-0
        my-8
        h-auto
        overflow-hidden
        rounded-xl
        transform
        transition
        duration-300
      "
      v-for="(item, index) in images"
      :key="index"
    >
      <img
        :class="{
          'filter  ': item.bw,
        }"
        class="rounded-xl w-full transition duration-300"
        :src="item.urls.thumb"
        alt=""
      />
      <div class="absolute bottom-1 left-1 right-1 flex w-auto justify-between">
        <span
          v-if="item.likes"
          :class="{ 'opacity-100': item.isHovered }"
          class="
            transition
            duration-300
            opacity-40
            rounded-lg
            text-sm
            bg-1d1 bg-opacity-60
            px-2
            py-0.5
            text-white
            font-light
            flex
            items-center
            gap-1
          "
        >
          <i class="bx bx-heart"></i>
          <span> {{ item.likes }}</span></span
        >

        <span
          :class="{ 'opacity-100': item.isHovered }"
          v-if="!isMobile && item.description"
          class="
            z-20
            transition
            duration-300
            opacity-40
            rounded-lg
            text-sm
            bg-1d1 bg-opacity-60
            px-2
            py-0.5
            text-white
            font-light
            flex
            items-center
            gap-1
          "
        >
          <i class="bx bxs-quote-single-left"></i>
          <span> {{ item.description }}</span></span
        >
      </div>
    </div>
  </div>
  <app-loading :is-loading="isLoading"></app-loading>
  <vue-easy-lightbox
    :visible="visible"
    :imgs="images"
    :index="index"
    @hide="handleHide"
  ></vue-easy-lightbox>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import AppLoading from '@/components/layout/AppLoading.vue';
export default {
  components: {
    AppLoading,
  },
  data: () => ({
    images: [],
    index: 0,
    visible: false,
    pageIsScrolled: false,
    isLoading: true,
  }),
  async created() {
    await this.fetchGalleryImages();
    this.images = await this.galleryImages;

    let imageLoaded = 0;
    for (const image of this.images) {
      const img = new Image();
      img.src = image.src;

      img.onload = () => {
        imageLoaded++;

        if (imageLoaded === this.images.length) {
          this.isLoading = false;
        }
      };
    }
  },
  computed: {
    ...mapState({
      galleryImages: 'galleryImages',
    }),
    ...mapGetters({ isMobile: 'isMobile' }),
  },
  methods: {
    ...mapActions({ fetchGalleryImages: 'fetchGalleryImages' }),

    hoveredImage(id, isHovered) {
      if (isHovered) {
        this.images.forEach((item) => {
          if (item.id === id) {
            item.bw = false;
            item.isHovered = true;
          } else {
            item.bw = true;
          }
        });
      } else {
        this.images.forEach((item) => {
          if (item.id === id) {
            item.bw = false;
            item.isHovered = false;
          } else {
            item.bw = false;
          }
        });
      }
    },

    showImg(event, index) {
      console.log(index);
      this.index = index;
      this.visible = true;

      console.log(event);
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

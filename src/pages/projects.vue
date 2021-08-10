<template>
  <div
    class="
      xl:masonry-4-col
      lg:masonry-3-col
      md:masonry-2-col
      sm:masonry-2-col
      box-border
      mx-auto
      before:box-inherit
      after:box-inherit
    "
  >
    <div
      v-for="repository in repositories"
      :key="repository.id"
      class="
        bg-1d1
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
        p-3
        gap-4
        flex flex-col
      "
    >
      <span class="flex items-center justify-between">
        <span class="flex items-center">
          <div>
            <span class="flex items-center text-abe">
              <i class="bx bx-meteor"></i>
              <h1 class="text-lg ml-2">{{ repository.name }}</h1>
            </span>
            <h5 class="text-xs ml-6 text-gray-300">
              {{ repository.full_name }}
            </h5>
          </div>
        </span>

        <span
          class="
            flex
            items-center
            gap-1
            bg-white
            text-1d1
            font-semibold
            px-2
            py-0.5
            rounded-md
          "
          ><i class="bx bx-star"></i>
          <span class="text-sm">{{ repository.watchers }}</span>
        </span>
      </span>
      <p class="text-sm text-white">
        <i class="bx bx-receipt"></i> {{ repository.description }}
      </p>
      <div class="flex justify-between items-center">
        <span
          class="
            flex
            items-center
            gap-1
            bg-white
            text-1d1
            font-semibold
            px-2
            py-0.5
            rounded-md
          "
          ><i class="bx bx-pyramid"></i>
          <span class="text-sm">{{ repository.language }}</span>
        </span>
        <!-- <span><i class="bx bx-star"></i> {{ repository.watchers }}</span> -->
        <span class="flex items-center gap-2">
          <a
            class="
              bg-white
              px-1
              py-0.5
              text-1d1
              rounded-md
              font-semibold
              text-sm
              flex
              items-center
              gap-1
            "
            :href="repository.html_url"
            target="_blank"
            ><i class="bx bxl-github"></i> source</a
          >

          <a
            :class="{ 'pointer-events-none opacity-20': !repository.homepage }"
            class="
              bg-white
              px-1
              py-0.5
              text-1d1
              rounded-md
              font-semibold
              text-sm
              flex
              items-center
              gap-1
            "
            :href="repository.homepage"
            target="_blank"
            ><i class="bx bx-link"></i>Preview</a
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods: {
    ...mapActions({
      fetchRepositories: 'fetchRepositories',
    }),
    kbToMB(kb) {
      return (kb / 1024).toFixed(2);
    },
  },
  computed: {
    ...mapState({ githubRepositories: 'githubRepositories' }),
    repositories() {
      return this.githubRepositories
        .filter((repository) => {
          return (
            !repository.fork &&
            repository.description &&
            !repository.description.includes('!exclude')
          );
        })
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    },
  },
  async mounted() {
    await this.fetchRepositories();
  },
};
</script>

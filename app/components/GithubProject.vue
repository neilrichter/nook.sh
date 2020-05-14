<template>
  <article
    class="github-project hover:shadow-xl"
    :class="project.primaryLanguage.name"
  >
    <div class="head flex justify-between">
      <h3 class="font-bold hover:text-content-lighter duration-200">
        {{ project.name }}
      </h3>
      <a
        :href="project.url"
        target="_blank"
        rel="noopener"
        class="hover:text-link duration-200 ease-out"
      >
        <span class="visually-hidden">Link to {{ project.name }}'s github repository</span>
        <fa :icon="['fas', 'link']" />
      </a>
    </div>
    <div class="stats my-1 text-yellow">
      <fa :icon="['fas', 'star']" /> {{ project.stargazers.totalCount }}
    </div>
    <p v-if="project.description">
      {{ project.description }}
    </p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Repository } from 'types/github';

interface Props {
  project: Repository
}

export default defineComponent<Props>({
  name: 'GithubComponent',
  props: {
    project: {
      type: Object as () => Repository,
    },
  },
});
</script>

<style lang="scss" scoped>
.github-project {
  @apply px-5 py-10 rounded-sm shadow;
  @apply duration-500 ease-out;
  @apply font-light text-content;

  @apply border border-t-4;

  &.TypeScript {
    border-color: #2b7489;
  }

  &.JavaScript {
    border-color: #f1e05a;
  }

  &.Vue {
    border-color: #2c3e50;
  }

  &.Go {
    border-color: #00ADD8;
  }

  &.Shell {
    border-color: #89e051;
  }

  &.PHP {
    border-color: #4F5D95;
  }
}
</style>

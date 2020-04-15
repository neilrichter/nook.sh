<template>
  <article
    class="github-project hover:shadow-xl"
    :style="{ 'border-top': `4px solid ${project.primaryLanguage.color}`}"
  >
    <div class="head flex justify-between">
      <h3 class="font-bold hover:text-content-lighter duration-200">
        {{ project.name }}
      </h3>
      <a :href="project.url" target="_blank" class="hover:text-link duration-200 ease-out">
        <fa :icon="['fas', 'link']" />
      </a>
    </div>
    <div class="stats my-1 text-yellow">
      <fa :icon="['fas', 'star']" /> {{ project.stargazers.totalCount }}
    </div>
    <p>{{ project.description }}</p>
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

<style>
.github-project {
  @apply px-5 py-10 rounded-sm shadow;
  @apply duration-500 ease-out;
  @apply font-light text-content;
}
</style>

<template>
  <div class="text-content">
    <header class="px-4 py-20 text-center">
      <h1 class="text-4xl font-bold">
        Hi! I'm <span class="text-accent">Neil&nbsp;Richter</span>
      </h1>
      <h2 class="text-xl">
        Front-End Engineer @<a href="https://golem.ai" class="underline">Golem.ai</a>
      </h2>
    </header>
    <main class="my-5">
      <section id="about" class="my-3 p-4 bg-lightgray flex flex-col items-center">
        <img class="rounded-full w-40 my-3" src="https://i.nook.sh/pp-squared.jpg" alt="">
        <p class="w-3/4 lg:w-1/2 text-lg lg:text-center my-5 mx-10">
          I'm a 20 years old Front-End engineer based in Paris, working at
          <a class="font-bold hover:underline" href="https://golem.ai">Golem.ai</a>.
          I love working on side projects to improve my skills.
          I love swimming, music and developing things.
        </p>
        <Socials class="text-3xl" />
      </section>
      <section id="pinned-repositories text-content" class="my-3 p-4">
        <h2 class="text-2xl text-center font-bold">
          Top projects
        </h2>
        <h3 class="text-center">
          Pinned repositories on Github
        </h3>
        <div
          class="my-5 px-5 lg:px-20 xl:px-64 projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <GithubProject
            v-for="(project, index) in $store.state.projects"
            :key="index"
            :project="project"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import GithubProject from '@/components/GithubProject.vue';
import Socials from '@/components/Socials.vue';

export default defineComponent({
  name: 'Index',
  components: { GithubProject, Socials },
  setup() {
    const projects = ref([]);

    return {
      projects,
    };
  },
});
</script>

<style lang="scss">
</style>

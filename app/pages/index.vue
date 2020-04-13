<template>
  <div class="text-main">
    <header class="px-4 py-20 text-center">
      <h1 class="text-4xl font-bold">
        Hi! I'm <span class="text-accent">Neil Richter</span>
      </h1>
      <h2 class="text-xl">
        Front-End Developer @<a href="https://golem.ai" class="underline">Golem.ai</a>
      </h2>
    </header>
    <main class="my-5">
      <section id="about" class="my-3 p-4 bg-lightgray flex flex-col items-center">
        <img class="rounded-full w-40 my-3" src="https://i.nook.sh/pp-squared.jpg" alt="">
        <p class="text-justify text-lg my-5">
          I'm a 20 years old Front-End developer based in Paris, working at
          <a class="font-bold hover:underline" href="https://golem.ai">Golem.ai</a>.
          I love working on side projects to improve my skills.
          I love swimming, music and developing things.
        </p>
        <ul class="social text-3xl flex justify-center">
          <li class="mx-2">
            <a class="p-2" target="_blank" href="https://github.com/noook">
              <fa :icon="['fab', 'github']" />
            </a>
          </li>
          <li class="mx-2">
            <a class="p-2" target="_blank" href="">
              <fa :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li class="mx-2">
            <a class="p-2" target="_blank" href="https://www.instagram.com/neil_rcht">
              <fa :icon="['fab', 'instagram']" />
            </a>
          </li>
          <li class="mx-2">
            <a class="p-2" target="_blank" href="https://www.linkedin.com/in/neilrichter">
              <fa :icon="['fab', 'linkedin']" />
            </a>
          </li>
        </ul>
      </section>
      <section id="pinned-repositories" class="my-3 p-4">
        <h2 class="text-2xl text-main text-center font-bold">
          Top projects
        </h2>
        <h3 class="text-center text-subtitle">
          Pinned repositories on Github
        </h3>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Logo from '@/components/Logo.vue';

export default defineComponent({
  name: 'Index',
  components: { Logo },
});
</script>

<style lang="scss">
</style>

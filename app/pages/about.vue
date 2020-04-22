<template>
  <div class="about text-content">
    <header class="py-20 px-5 text-5xl text-center font-bold">
      <h1>About <span class="text-accent">Neil&nbsp;Richter</span></h1>
    </header>
    <main>
      <section id="description" class="bg-lightgray py-3 px-8 lg:py-5 lg:flex justify-center">
        <div class="lg:w-8/12 lg:flex">
          <div class="left lg:flex flex-col justify-center">
            <img
              class="rounded-full w-40 my-4 mx-auto"
              src="https://i.nook.sh/pp-squared.jpg"
              alt="Neil Richter's profile picture"
            >
            <h2 class="text-4xl font-bold text-center lg:text-left whitespace-no-wrap">
              Neil Richter
            </h2>
            <ul class="my-2 text-lg">
              <li class="my-1">
                <label class="mr-1">Age:</label>
                <span>{{ age }}</span>
              </li>
              <li class="my-1">
                <label claass="mr-1">Job:</label>
                <span>Front-End Engineer</span>
              </li>
              <li class="my-1">
                <label class="mr-1">Company:</label>
                <span><a class="text-accent hover:underline" href="https://golem.ai">Golem.ai</a></span>
              </li>
            </ul>
            <Socials
              class="text-2xl lg:text-3xl my-4 justify-evenly lg:justify-start"
              :link-class="['p-1']"
              :li-class="['mx-0', 'mr-4']"
            />
          </div>
          <div class="right flex-grow mt-10 lg:mt-0 lg:ml-16 flex flex-col justify-center text-lg text-justify">
            <h3 class="my-3 font-bold">
              Hello !
            </h3>
            <p class="mb-4">
              My name is <span class="text-accent">Neil Richter</span> and I'm a {{ age }} years old
              <span class="text-accent">Full-stack Developer</span> based in Paris. I describe myself as
              a curious person who loves coding, and the web platform. Currently, I am working at a
              company called <a class="text-accent underline" href="https://golem.ai">Golem.ai</a> as a
              <span class="text-accent">Front-End Engineer</span>.
            </p>
            <p class="mb-4">
              In my spare time I do a lot of sports, and I also like to work on side projects.
              In that way I learn a lot of stuff, gain a lot of experience as a developer and discover
              a lot of open source projects.
            </p>
            <p class="mb-4">
              I play some video games aswell such as League of Legends or Teamfight Tactics.
            </p>
          </div>
        </div>
      </section>
      <section id="experience" class="p-3 px-8 lg:flex flex-col lg:items-center">
        <h2 class="text-bold text-4xl text-center my-5">
          Experience
        </h2>
        <ul class="experiences lg:w-2/3">
          <li v-for="(experience, index) in experiences" :key="index">
            <HistoryEntry :item="experience" />
          </li>
        </ul>
      </section>
      <section id="skills" class="p-8 flex flex-col items-center">
        <h2 class="text-bold text-4xl text-center my-10">
          Skills
        </h2>
        <ul class="grid lg:w-1/2 grid-cols-3 lg:mx-20 text-center gap-16">
          <li
            v-for="skill in skills"
            :key="skill.name"
            class="flex justify-center items-center"
            :title="skill.name"
          >
            <img
              class="lg:w-24"
              :src="require(`@/assets/img/icons/${skill.class}/${skill.class}-original.svg`)"
              :alt="skill.name"
            >
          </li>
        </ul>
      </section>
      <section id="education" class="p-3 px-8 lg:flex flex-col lg:items-center">
        <h2 class="text-bold text-4xl text-center my-5">
          Education
        </h2>
        <ul class="education lg:w-2/3">
          <li v-for="(formation, index) in education" :key="index">
            <HistoryEntry :item="formation" />
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api';
import Socials from '@/components/Socials.vue';
import HistoryEntry from '@/components/HistoryEntry.vue';
import {
  birth, experiences, skills, education,
} from '@/config/about';

export default defineComponent({
  name: 'About',
  components: { HistoryEntry, Socials },
  setup() {
    const age = computed(() => {
      const { day, month, year } = birth;
      const difference = new Date(Date.now() - +new Date(`${month}/${day}/${year}`));
      return difference.getFullYear() - 1970;
    });

    return {
      age,
      experiences: ref(experiences.sort((a, b) => +b.start - +a.start)),
      skills,
      education: ref(education.sort((a, b) => +b.start - +a.start)),
    };
  },
});
</script>

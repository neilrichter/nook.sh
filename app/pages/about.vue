<template>
  <div class="about text-content">
    <header class="py-20 px-5 text-5xl text-center font-bold">
      <h1>About <span class="text-accent">Neil&nbsp;Richter</span></h1>
    </header>
    <main>
      <section id="description" class="bg-lightgray py-3 px-8 lg:py-5 lg:flex justify-center">
        <div class="lg:w-8/12 lg:grid grid-cols-3">
          <div class="left lg:flex flex-col justify-center">
            <h2 class="text-4xl font-bold text-center lg:text-left whitespace-no-wrap">
              Neil Richter
            </h2>
            <ul class="my-2">
              <li class="my-1">
                <label class="mr-1">Age:</label>
                <span>{{ age }}</span>
              </li>
              <li class="my-1">
                <label claass="mr-1">Job:</label>
                <span>Front-End Developer</span>
              </li>
              <li class="my-1">
                <label class="mr-1">Company:</label>
                <span><a class="text-accent hover:underline" href="https://golem.ai">Golem.ai</a></span>
              </li>
            </ul>
            <Socials
              class="text-2xl lg:text-3xl justify-start"
              :link-class="['p-1']"
              :li-class="['mx-0', 'mr-4']"
            />
          </div>
          <div class="right col-span-2 mt-10 lg:mt-0">
            <h3 class="my-3 font-bold">
              Hello !
            </h3>
            <p class="mb-4">
              My name is <span class="text-accent">Neil Richter</span> and I'm a {{ age }} years old
              <span class="text-accent">Full-stack Developer</span> based in Paris. I describe myself as
              a full-stack developer who loves coding, and the web platform. Currently, I am working at a
              company called <a class="text-accent underline" href="https://golem.ai">Golem.ai</a> as a
              <span class="text-accent">Front-End Developer</span>.
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
      <section id="experience" class="p-3 px-8">
        <h2 class="text-bold text-4xl text-center">
          Experience
        </h2>
        <ul class="experiences">
          <li v-for="(experience, index) in experiences" :key="index">
            <article class="my-5 p-5 border rounded shadow-sm">
              <div class="duration hidden lg:flex">
                {{ getReadbleDiff(experience) }}
              </div>
              <div class="content">
                <h2 class="text-4xl">
                  {{ experience.company }}
                </h2>
                <h3 class="text-2xl my-2 font-medium">
                  {{ experience.title }}
                </h3>
                <h4>{{ getYearMonthDate(experience.start) }} — {{ experience.end ? getYearMonthDate(experience.end) : 'Present' }}</h4>
                <p>{{ experience.description }}</p>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api';
import Socials from '@/components/Socials.vue';
import getMonthDiff from '@/hooks/date-duration';
import { birth, experiences, Experience } from '@/config/about';

export default defineComponent({
  name: 'About',
  components: { Socials },
  setup() {
    const age = computed(() => {
      const { day, month, year } = birth;
      const difference = new Date(Date.now() - +new Date(`${month}/${day}/${year}`));
      return difference.getFullYear() - 1970;
    });

    function getReadbleDiff(experience: Experience): string {
      const monthDiff = getMonthDiff(experience.start, experience.end || new Date());
      const result = {
        year: Math.floor(monthDiff / 12),
        months: monthDiff % 12,
      };
      const years = result.year ? `${result.year} year${result.year > 1 ? 's' : ''} ` : '';
      const months = result.months ? `${result.months} month${result.months > 1 ? 's' : ''}` : '';

      return `${years}${months}`;
    }

    function getYearMonthDate(date: Date): string {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `${year}-${month}`;
    }

    return {
      age,
      experiences: ref(experiences),
      getReadbleDiff,
      getYearMonthDate,
    };
  },
});
</script>

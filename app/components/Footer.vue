<template>
  <footer class="text-content flex flex-col lg:flex-row lg:justify-between lg:items-center p-5 lg:px-10 lg:py-8 bg-lightgray">
    <div class="left">
      <h2 class="text-3xl text-center lg:text-left font-bold">
        Neil Richter
      </h2>
      <ul class="my-3 flex items-cente justify-center uppercase text-xs font-semibold">
        <li class="mx-2 lg:ml-0 lg:mr-4 text-link-contrast">
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
        <li class="mx-2 lg:ml-0 lg:mr-4 text-link-contrast">
          <nuxt-link to="about">
            About me
          </nuxt-link>
        </li>
        <li class="mx-2 lg:ml-0 lg:mr-4 text-link-contrast">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    <Socials class="text-2xl lg:text-3xl justify-center lg:justify-start" />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Socials from '@/components/Socials.vue';


export default defineComponent({
  name: 'Footer',
  components: { Socials },
});
</script>

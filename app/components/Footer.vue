<template>
  <footer class="flex flex-col lg:flex-row lg:justify-between lg:items-center p-5 lg:px-10 lg:py-8 bg-lightgray">
    <div class="left">
      <h2 class="text-3xl text-center lg:text-left font-bold text-main">
        Neil Richter
      </h2>
      <ul class="my-3 flex items-cente justify-center uppercase text-xs font-semibold">
        <li class="mx-2 lg:ml-0 lg:mr-4 text-link">
          <a href="#">Home</a>
        </li>
        <li class="mx-2 lg:ml-0 lg:mr-4 text-link">
          <a href="#">About me</a>
        </li>
        <li class="mx-2 lg:ml-0 lg:mr-4 text-link">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    <ul class="social text-2xl lg:text-3xl flex justify-center lg:justify-start">
      <li class="mx-2">
        <a class="p-2 hover:opacity-50 duration-150 ease-out" target="_blank" href="https://github.com/noook">
          <fa :icon="['fab', 'github']" />
        </a>
      </li>
      <li class="mx-2">
        <a class="p-2 hover:opacity-50 duration-150 ease-out" target="_blank" href="">
          <fa :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li class="mx-2">
        <a class="p-2 hover:opacity-50 duration-150 ease-out" target="_blank" href="https://www.instagram.com/neil_rcht">
          <fa :icon="['fab', 'instagram']" />
        </a>
      </li>
      <li class="mx-2">
        <a class="p-2 hover:opacity-50 duration-150 ease-out" target="_blank" href="https://www.linkedin.com/in/neilrichter">
          <fa :icon="['fab', 'linkedin']" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Footer',
});
</script>

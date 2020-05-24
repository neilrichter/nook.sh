<template>
  <nav class="sticky top-0 right-0 bg-black text-white">
    <div class="mobile px-2 py-1 flex justify-end lg:hidden">
      <input id="focus-target" ref="inputRef" hidden type="checkbox">
      <div class="overlay">
        <label for="focus-target" class="text-6xl self-end leading-none px-4">
          &times;
        </label>
        <ul class="flex flex-col text-4xl flex-grow items-center justify-center font-medium">
          <li class="my-2">
            <nuxt-link to="/" @click.native="hide">
              Home
            </nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link to="about" @click.native="hide">
              About me
            </nuxt-link>
          </li>
          <li class="my-2">
            <a href="mailto:me@neilrichter.com">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <label for="focus-target" class="p-2">
        <fa class="text-4xl" :icon="['fas', 'bars']" />
      </label>
    </div>
    <div class="desktop hidden p-4 lg:flex lg:px-8">
      <ul class="flex items-center justify-center font-medium">
        <li class="mx-2 lg:ml-0 lg:mr-4">
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
        <li class="mx-2 lg:ml-0 lg:mr-4">
          <nuxt-link to="about">
            About me
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const inputRef = ref<null | HTMLInputElement>(null);

    function hide() {
      if (inputRef.value !== null) {
        inputRef.value.checked = false;
      }
    }

    return {
      inputRef,
      hide,
    };
  },
});
</script>

<style scoped>
.overlay {
  @apply fixed flex flex-col p-2 inset-0;
  @apply opacity-0 bg-black;
  transform: translateX(-200%);
  transition-duration: .2s, 0s;
  transition-delay: 0s, 1s;
  transition-property: opacity, transform;
}
#focus-target:checked + .overlay {
  @apply z-20 opacity-100;
  transform: translateX(0);
  transition-duration: .2s, 0s;
  transition-delay: 0s, 0s;
  transition-property: opacity, transform;
}

li a:after {
  @apply w-0;
}

.nuxt-link-exact-active {
  @apply font-semibold relative;
}

.nuxt-link-exact-active:after {
  content: '';
  left: 50%;
  bottom: -5px;
  transform: translateX(-50%);
  transition: width 2s;
  @apply absolute mt-2 w-3;
  @apply border-b border-white;
}
</style>

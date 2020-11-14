<template>
  <div class="content">
    <h2>{{ error.statusCode }}</h2>
    <h1>{{ message }}</h1>
    <img src="https://media.giphy.com/media/jl7eVqDXCFcm4/source.gif">
    <nuxt-link to="/">
      Back to home
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'DefaultLayout',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  layout: 'error',
  components: { Navbar, Footer },
  setup(props) {
    return {
      message: computed(() => {
        switch (props.error.statusCode) {
          case 404: return 'Nothing here, got lost ?';
          default: return 'Uh oh, something wrong happened';
        }
      }),
    };
  },
});
</script>

<style scoped>
.content {
  @apply flex flex-col items-center py-8;
  min-height: 70vh;
}

.content h2 {
  @apply text-5xl font-bold text-center;
}

.content h1 {
  @apply text-2xl text-center font-semibold mb-6;
}

.content img {
  @apply w-full;
  max-width: 700px;
}

.content a {
  @apply text-accent text-lg underline font-medium mt-8;
}

@media screen and (min-width: 1024px) {
  .content h2 {
    @apply text-6xl;
  }
  .content h1 {
    @apply text-3xl;
  }
}
</style>

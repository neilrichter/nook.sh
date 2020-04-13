<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: { Navbar },
});
</script>

<style>
</style>

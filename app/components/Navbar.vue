<template>
  <nav class="sticky top-0 right-0 bg-black text-white p-4">
    <div class="mobile lg:hidden">
      mobile
    </div>
    <div class="desktop hidden lg:flex">
      desktop
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Navbar',
});
</script>

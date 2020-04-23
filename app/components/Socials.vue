<template>
  <ul class="socials flex">
    <li :class="li">
      <a :class="a" target="_blank" rel="noopener" href="https://github.com/noook">
        <fa :icon="['fab', 'github']" />
      </a>
    </li>
    <li :class="li">
      <a :class="a" target="_blank" rel="noopener" href="https://twitter.com/_nooooook">
        <fa :icon="['fab', 'twitter']" />
      </a>
    </li>
    <li :class="li">
      <a :class="a" target="_blank" rel="noopener" href="https://www.instagram.com/neil_rcht">
        <fa :icon="['fab', 'instagram']" />
      </a>
    </li>
    <li :class="li">
      <a :class="a" target="_blank" rel="noopener" href="https://www.linkedin.com/in/neilrichter">
        <fa :icon="['fab', 'linkedin']" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

interface Props {
  liClass: string[];
  linkClass: string[]
}

export default defineComponent<Props>({
  name: 'Socials',
  props: {
    liClass: {
      type: Array as () => string[],
      default: () => ['mx-2'],
    },
    linkClass: {
      type: Array as () => string[],
      default: () => ['p-2'],
    },
  },
  setup(props: Props) {
    const defaultA = ['duration-200', 'ease-out', 'hover:opacity-50'];
    return {
      li: props.liClass,
      a: [...defaultA, ...props.linkClass],
    };
  },
});
</script>

<style>
</style>

<template>
  <article
    class="my-5 p-8 lg:p-0 border rounded lg:border-0 shadow-sm lg:shadow-none lg:flex items-center"
  >
    <div class="capitalize hidden lg:flex items-center justify-center flex-shrink-0 shadow-xl mr-16 bg-accent p-10 text-white text-center font-bold text-xl w-40 h-32">
      {{ getReadbleDiff(item) }}
    </div>
    <div class="content">
      <h2 class="text-4xl">
        {{ item.company }}
      </h2>
      <div class="headings lg:flex items-center">
        <h3 class="text-2xl my-2 font-medium">
          {{ item.title }}
        </h3>
        <h4 class="lg:text-xl lg:ml-5">
          {{ getYearMonthDate(item.start) }} — {{ item.end ? getYearMonthDate(item.end) : 'Present' }}
        </h4>
      </div>
      <p class="my-2 text-lg">
        {{ item.description }}
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import getMonthDiff from '@/hooks/date-duration';
import { HistoryEntry } from '@/config/about';

interface Props {
  experience: HistoryEntry;
}

export default defineComponent<Props>({
  name: 'HistoryEntry',
  props: {
    item: {
      type: Object as () => HistoryEntry,
      required: true,
    },
  },
  setup() {
    function getReadbleDiff(experience: HistoryEntry): string {
      const monthDiff = getMonthDiff(experience.start, experience.end || new Date());
      const result = {
        year: Math.floor(monthDiff / 12),
        months: monthDiff % 12,
      };
      /* eslint-disable no-irregular-whitespace */
      const years = result.year ? `${result.year} year${result.year > 1 ? 's' : ''} ` : '';
      const months = result.months ? `${result.months} month${result.months > 1 ? 's' : ''}` : '';
      /* eslint-enable no-irregular-whitespace */
      return `${years}${months}`;
    }

    function getYearMonthDate(date: Date): string {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `${year}-${month}`;
    }

    return {
      getYearMonthDate,
      getReadbleDiff,
    };
  },
});
</script>

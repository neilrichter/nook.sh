// import { Ref } from '@vue/composition-api';

export default function getMonthDiff(start: Date, end: Date): number {
  return Math.ceil(
    (+end - +start) / 1000 / 60 / 60 / 24 / 30,
  );
}

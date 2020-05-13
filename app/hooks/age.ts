import { birth } from '../config/about';

export default function getAge(): number {
  const { day, month, year } = birth;
  const difference = new Date(Date.now() - +new Date(`${month}/${day}/${year}`));
  return difference.getFullYear() - 1970;
}

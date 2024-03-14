import { type ClassValue, clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type UserStatistics = {
  ip: string;
}

export const userStatistics: () => Promise<UserStatistics> = async () => {
  const response = await fetch('http://ipinfo.io/ip');
  const ip: string = await response.text();
  return { ip };
}
import { writable } from "svelte/store";

export type themeStore = {
  forcedDark: boolean;
}

export const themeStore = writable<themeStore>({
  forcedDark: false
});
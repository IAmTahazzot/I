<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 1,
			damping: 1
		}
	);

	let coordsCircle = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.3
		}
	);

	let size = spring(5);
	let visible: boolean = false;

	// smart vision
	let grow: boolean = false;

	onMount(() => {
		window.addEventListener('mousemove', (e: MouseEvent): void => {
      if (
        e.target instanceof HTMLAnchorElement ||
        e.target instanceof HTMLButtonElement ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof Element && e.target.closest('a') ||
        e.target instanceof Element && e.target.closest('ul') ||
				e.target instanceof Element && e.target.hasAttribute('data-smart-cursor')
      ) {
        grow = true;
      } else {
        grow = false;
      }

			visible = true;
			coords.set({ x: e.clientX, y: e.clientY });
			coordsCircle.set({ x: e.clientX, y: e.clientY });
		});

		window.addEventListener('mousedown', (e: MouseEvent): void => {
			size.set(20);
		});

		window.addEventListener('mouseup', (e: MouseEvent): void => {
			size.set(5);
		});
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
	class="fixed w-full h-screen top-0 left-0 pointer-events-none z-[1000]"
	style={`display: ${visible && !grow ? 'block' : 'none'}`}
>
	<circle cx={$coords.x} cy={$coords.y} r={$size} fill="#000" />
</svg>

<div
	class={cn(
		'fixed h-10 w-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-difference transition-transform duration-300 z-10',
		!grow && 'bg-white',
    grow && 'border border-black dark:border-white scale-[200%] mix-blend-normal',
		visible ? 'block' : 'hidden'
	)}
	style={`top: ${$coordsCircle.y}px; left: ${$coordsCircle.x}px`}
></div>

<style>
	/* :global(body),
	:global(a) {
		cursor: none;
	} */
</style>

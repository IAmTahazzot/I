<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	let theme: 'light' | 'dark' = 'light';
	let mounted: boolean = false;

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme as 'light' | 'dark';
		}
		mounted = true;
	});

	const changeTheme = () => {
		theme = theme === 'light' ? 'dark' : 'light';
		document.documentElement.classList.toggle('dark');
		document.documentElement.style.colorScheme = theme;
		localStorage.setItem('theme', theme);
	};
</script>

<button
	on:click={changeTheme}
	class={cn('opacity-0 transition-opacity duration-300 group/theme', mounted && 'opacity-100')}
>
	<svg
		class="group-hover/theme:rotate-180 transition-transform duration-300"
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle
			cx="8.76562"
			cy="8.76581"
			r="6"
			fill={theme === 'light' ? 'black' : 'white'}
			stroke={theme === 'light' ? 'black' : 'white'}
			stroke-width="3"
		/>
		<path
			d="M13.059 4.17616C13.6771 4.72458 14.1811 5.38938 14.5422 6.13258C14.9034 6.87579 15.1146 7.68285 15.1639 8.5077C15.2132 9.33254 15.0995 10.159 14.8293 10.9399C14.5592 11.7208 14.1379 12.4409 13.5894 13.059C13.041 13.6771 12.3762 14.1811 11.633 14.5422C10.8898 14.9034 10.0827 15.1146 9.2579 15.1639C8.43306 15.2131 7.60659 15.0995 6.82568 14.8293C6.04477 14.5592 5.32472 14.1379 4.70664 13.5894L8.88281 8.8828L13.059 4.17616Z"
			fill={theme === 'light' ? 'white' : 'black'}
		/>
	</svg>
</button>

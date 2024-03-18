<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import HomeIcon from './HomeIcon.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	const navigations: { name: string; path: string }[] = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'Cases',
			path: '/cases'
		},
		{
			name: 'Lab',
			path: '/lab'
		},
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Contact',
			path: '/contact'
		}
	];

	export let forcedDarkMode: boolean = false;
	let activeNavigation = false;
</script>

<nav class="grid grid-cols-2 h-16 xs:h-12">
	<div class="flex flex-col justify-center">
		<button
			on:click={() => (activeNavigation = !activeNavigation)}
			class="xs:hidden text-white"
		>
			<svg height="50" width="50">
				<circle
					cx="25"
					cy="25"
					r="20"
					stroke="white"
					stroke-width="2"
					fill="transparent"
				/>
				<circle
					cx="20"
					cy="25"
					r="2"
					stroke="white"
					stroke-width="3"
					fill="white"
				/>
				<circle
					cx="30"
					cy="25"
					r="2"
					stroke="white"
					stroke-width="3"
					fill="white"
				/>
			</svg>
		</button>
		<ul class="hidden xs:flex flex-col xs:flex-row items-center gap-x-6 h-full">
			{#each navigations as navigation}
				<li>
					{#if navigation.path === '/'}
						<a class="text-xs font-bold font-body" href={navigation.path}>
							<HomeIcon isActive={$page.route.id === '/'} {forcedDarkMode} />
						</a>
					{:else}
						<a
							class={cn(
								'text-xs font-bold font-body anim-border-bottom dark:text-neutral-200',
								forcedDarkMode && 'text-neutral-200',
								$page.route.id === navigation.path && 'active'
							)}
							href={navigation.path}
						>
							{navigation.name}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex items-center justify-end gap-x-4 pt-1">
		<a
			data-sveltekit-reload
			href="/my-story"
			class={cn(
				'text-xs font-bold font-body anim-border-bottom dark:text-neutral-200',
				forcedDarkMode && 'text-neutral-200'
			)}>My Story</a
		>
		<ThemeToggle />
	</div>
</nav>

<aside
	class={cn(
		'fixed top-0 left-0 w-full h-screen bg-dark z-10 -translate-x-full transition-transform duration-300',
		activeNavigation && 'translate-x-0'
	)}
>
	<ul class="flex flex-col gap-5 p-3">
		{#each navigations as navigation, i}
			<li>
				<a
					class={cn(
						'text-5xl font-bold uppercase font-display anim-border-bottom dark:text-neutral-200 block translate-x-[-50px]  transform transition-transform duration-300',
						activeNavigation && 'translate-x-0',
						forcedDarkMode && 'text-neutral-200',
						$page.route.id === navigation.path && 'active'
					)}
					href={navigation.path}
					style="transition-delay: {i * 100}ms;"
				>
					{navigation.name}
				</a>
			</li>
		{/each}
	</ul>

	<!-- cross svg -->
	<button on:click={() => (activeNavigation = false)}>
		<svg
			class="absolute top-3 right-3 xs:hidden"
			width="50"
			height="50"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="18" y1="6" x2="6" y2="18"></line>
			<line x1="6" y1="6" x2="18" y2="18"></line>
		</svg>
	</button>
</aside>

<style>
	.anim-border-bottom {
		position: relative;
	}

	.anim-border-bottom::after {
		content: '';
		display: block;
		position: absolute;
		bottom: -2px;
		height: 1px;
		width: 100%;
		background-color: var(--color-black);
		transform: scaleX(0);
		transition: transform 0.3s;
		transform-origin: bottom right;
	}

	.anim-border-bottom:hover::after,
	.anim-border-bottom.active::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>

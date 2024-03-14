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
</script>

<nav class="grid grid-cols-2 h-12">
	<div>
		<ul class="flex items-center gap-x-6 h-full">
			{#each navigations as navigation}
				<li>
					{#if navigation.path === '/'}
						<a class="text-xs font-bold font-body " href={navigation.path}>
							<HomeIcon isActive={$page.route.id === '/'} forcedDarkMode={forcedDarkMode} />
						</a>
					{:else}
						<a
							class={cn(
								'text-xs font-bold font-body anim-border-bottom',
								forcedDarkMode && 'text-white',
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
	<div class="self-center justify-self-end">
		<div class="flex items-center justify-center gap-x-4">
			<a href="/my-story" class={
				cn(
					'text-xs font-bold font-body anim-border-bottom',
					forcedDarkMode && 'text-white',
				)
			}>My Story</a>
			<ThemeToggle />
		</div>
	</div>
</nav>

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

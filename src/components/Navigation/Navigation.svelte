<script lang="ts">
	const navigations = [
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Contact',
			path: '/contact'
		}
	];
</script>

<nav class="grid grid-cols-2 content-between">
	<div>
		<ul class="flex items-center gap-x-2">
			{#each navigations as navigation}
				<li>
					<a class="text-sm font-bold font-body" href={navigation.path}>{navigation.name}</a>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<button>theme toggle</button>
	</div>
</nav>

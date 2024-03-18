<script lang="ts">
	import ServiceCard from './ServiceCard.svelte';
	import type { Service } from './types';

	export let services: Service[];
</script>

<div class="font-display">
	{#each services as service, i}
		<ServiceCard
			counter={i + 1}
			title={service.title}
			description={service.description}
			className={i === services.length - 1 ? 'border-b' : ''}
		/>
	{/each}
</div>

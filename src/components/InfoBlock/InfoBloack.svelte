<script lang="ts">
	import Spacer from "../Container/Spacer.svelte";

	export let title: string;
	export let type: 'bullet point' | 'default' = 'default';
	export let description: string;
</script>

<Spacer size={33} unit={'vh'} />
<div class="mt-[200px] flex items-center">
	<div class="flex w-full font-inter">
		<div class="basis-[27%]">
			{#if type === 'bullet point'}
				<div class="flex items-center gap-x-2 title-area">
					<div class="h-2 w-2 rounded-full bg-black"></div>
					<span class='text-sm'>{title}</span>
				</div>
			{:else}
				{title}
			{/if}
		</div>
		<div class="flex-1 text-[35px] font-medium leading-[47px] tracking-tighter description space-y-8">
			{@html description}
		</div>
		<div class="basis-[13%]"></div>
	</div>
</div>
<Spacer size={50} unit={'vh'} />
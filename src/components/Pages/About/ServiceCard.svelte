<script lang="ts">
	import { cn } from "$lib/utils";

	export let counter: number;
	export let title: string;
	export let description: string;
	export let className: string = ''
</script>

<div class={
	cn(
		'grid grid-cols-[23%_35%_1fr_10%] border-t border-neutral-200 py-14 dark:border-neutral-800',
		className
	)
}>
	<p class="font-semibold text-xl">{counter}</p>
	<p class="font-semibold text-3xl leading-[40px]" data-smart-cursor>{@html title}</p>
	<p class="text-[#868788] font-bold leading-7">{@html description}</p>
</div>
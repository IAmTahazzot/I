<script lang="ts">
	import { cn } from '$lib/utils';
	import { MAIL } from '../../data/constants';
	import Spacer from '../Container/Spacer.svelte';

	export let title: string;
	export let type: 'bullet point' | 'default' = 'default';
	export let description: string;
	export let className: string = '';
	export let showContact: boolean = false;
	export let forcedDarkMode: boolean = false;
</script>

<div class={cn('flex items-center', className)}>
	<div class="flex flex-col lg:flex-row w-full font-inter">
		<div class="basis-[100%] lg:basis-[27%] mb-4 lg:mb-0">
			{#if type === 'bullet point'}
				<div class="flex items-center gap-x-2 title-area">
					<div class="h-2 w-2 rounded-full bg-black dark:bg-white"></div>
					<span class="text-sm">{title}</span>
				</div>
			{:else}
				{title}
			{/if}
		</div>
		<div class="flex-1 description">
			<div class="text-[28px] leading-[38px] lg:text-[35px] font-medium lg:leading-[47px] tracking-tighter space-y-8 dark:text-neutral-100">
				{@html description}
			</div>

			{#if showContact}
				<div
					class={
						cn(
							'relative border h-14 w-fit flex items-center justify-center rounded-full group/link overflow-hidden mt-20 border-black dark:border-neutral-100',
							forcedDarkMode && 'border-white',
						)
					}
					data-smart-cursor
				>
					<div class='h-full group-hover/link:-translate-y-[100%] transition-transform duration-300'>
						<div class="flex items-center justify-center h-full px-6">Let&apos;s Connect</div>
						<a href={`mailto:${MAIL}`} class={
							cn(
								'flex items-center justify-center h-full bg-black text-white px-6 dark:bg-white dark:text-black',
								forcedDarkMode && 'bg-white text-black',
							)
						}>
							<span>{MAIL}</span>
						</a>
					</div>
				</div>
			{/if}
		</div>
		<div class="basis-[13%]"></div>
	</div>
</div>

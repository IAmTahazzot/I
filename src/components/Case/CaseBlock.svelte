<script lang="ts">
	import { cn } from "$lib/utils";

	export let slug: string;
	export let clientName: string;
	export let title: string;
	export let thumbnail: string;
	export let date: Date;
  export let forcedDarkMode: boolean = false;
</script>

<a href={slug} class="h-[70vh] md:h-[90vh] flex flex-col anim-hover">
  <div class='flex-1 overflow-hidden relative rounded-xl'>
    <img src={thumbnail} alt="Case" class="w-full h-full object-cover " />
    <div class={
      cn(
        'absolute flex items-center justify-center h-52 w-52 top-1/2 left-1/2 bg-white text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 rounded-full z-10 anim-view-case',
        forcedDarkMode && 'bg-neutral-800 text-neutral-200'
      )
    }>
      <span class='font-medium text-[18px]'>View Case</span> 
    </div>
  </div>
	<div class="flex items-center text-[18px] mt-6 font-semibold">
		<h3 class="hidden md:block basis-[27%]">{clientName}</h3>
		<h3 class="flex-1">{title}</h3>
		<h3 class="md:basis-[23%]">
      ({date.toLocaleString('en-US', { month: 'short' }) + ' ' + date.getFullYear()})
    </h3>
	</div>
</a>

<style>
.anim-hover img {
  transition: .5s cubic-bezier(.3,.86,.91,.86);
}

.anim-hover:hover img {
  transform: scale(1.05);
}

.anim-view-case {
  transition: .5s cubic-bezier(0,.99,1,1.01) .15s;
  transform: translate(-50%, -50%) scale(0);   
}

.anim-hover:hover .anim-view-case {
  transform: translate(-50%, -50%) scale(1);
}

.anim-view-case span {
  opacity: 0;
}

.anim-hover:hover .anim-view-case span {
  opacity: 1;
}

</style>

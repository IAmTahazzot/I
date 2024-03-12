<script lang="ts">
	import { cn } from "$lib/utils";

  export let className: string = '';
</script>

<div class={
  cn(
    'mx-5 2xl:max-w-[90%]',
    className
  )
}>
  <slot></slot>
</div>
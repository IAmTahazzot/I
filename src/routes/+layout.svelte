<script lang='ts'>
  import '@fontsource-variable/inter'
  import '@fontsource-variable/plus-jakarta-sans'
  import '../global.css'
	import SmartCursor from '../components/SmartCursor/SmartCursor.svelte';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	const SmoothScroll = () => {
		const lenis = new Lenis({
			duration: 2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -20 * t)),
			orientation: 'vertical', // vertical, horizontal
			gestureOrientation: 'vertical', // vertical, horizontal, both
			smoothWheel: true,
			//smoothTouch: false,
			syncTouch: true,
			touchMultiplier: 2,
			infinite: false
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	};

  onMount(() => {
    SmoothScroll()
  })
</script>

<div id='app'>
  <slot></slot>
  <SmartCursor />
</div>
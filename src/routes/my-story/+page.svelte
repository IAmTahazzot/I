<script lang="ts">
	import { onMount } from 'svelte';

	import '@fontsource-variable/fraunces';

	import Lenis from '@studio-freight/lenis';

	import Container from '../../components/Container/Container.svelte';
	import StoryHome from '../../components/Pages/Story/StoryHome.svelte';
	import StoryControl from '../../components/Pages/Story/StoryControl.svelte';
	import Spacer from '../../components/Container/Spacer.svelte';
	import FinalChapter from '../../components/Pages/Story/Chapters/FinalChapter.svelte';
	import Beginning from '../../components/Pages/Story/Chapters/Beginning.svelte';
	import Solitude from '../../components/Pages/Story/Chapters/Solitude.svelte';

	let isFullScreen = false;

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

	const TextAnimation = () => {
		gsap.config({ trialWarn: false });
		gsap.registerPlugin(ScrollTrigger);


		document.querySelectorAll('p').forEach((target) => {
			gsap.to(target, {
				backgroundPositionX: 0,
				ease: 'none',
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: 'top center',
					end: 'top top'
				}
			});
		});
	};

	const FullScreenMode = () => {
		window.addEventListener('keydown', (e) => {
			if (!document) {
				return;
			}

			if (e.key === 'f') {
				if (isFullScreen) {
					document.exitFullscreen();
					isFullScreen = false;
				} else {
					document.documentElement.requestFullscreen();
					isFullScreen = true;
				}
			}

			if (e.key === 'Escape' && isFullScreen) {
				document.exitFullscreen();
				isFullScreen = false;
			}
		});
	};

	onMount(() => {
		SmoothScroll();
		TextAnimation();
		FullScreenMode();
	});
</script>

<svelte:head>
	<title>Once upon a time...</title>
	<script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
	<script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
</svelte:head>

<div id="story" class="bg-dark min-h-screen text-neutral-200">
	<Container>
		<StoryControl />
		<Spacer size={70} />
		<StoryHome />

		<Spacer size={100} unit="vh" />
		<Beginning />
		<Spacer size={70} unit="vh" />
		<Solitude />
		<Spacer size={70} unit="vh" />
		<FinalChapter />
		<Spacer size={70} unit="vh" />
	</Container>
</div>

<style>
	:global(#story) {
		font-family: 'Fraunces Variable', serif;
	}
</style>

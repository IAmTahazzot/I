<script lang="ts">
	import Container from '../../components/Container/Container.svelte';
	import StoryHome from '../../components/Pages/Story/StoryHome.svelte';
	import StoryControl from '../../components/Pages/Story/StoryControl.svelte';
	import Spacer from '../../components/Container/Spacer.svelte';
	import Chapter1 from '../../components/Pages/Story/Chapters/Chapter1.svelte';
	import { onMount } from 'svelte';
	import Chapter2 from '../../components/Pages/Story/Chapters/Chapter2.svelte';
	import Chapter3 from '../../components/Pages/Story/Chapters/Chapter3.svelte';
	import Chapter4 from '../../components/Pages/Story/Chapters/Chapter4.svelte';
	import Chapter5 from '../../components/Pages/Story/Chapters/Chapter5.svelte';

	let isFullScreen = false;

	onMount(() => {
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
					end: 'bottom center'
				}
			});
		});

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
	});
</script>

<svelte:head>
	<title>Once upon a time...</title>
	<script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
	<script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
	<!-- <script src="/js/splitText.js"></script> -->
</svelte:head>

<div class="bg-dark min-h-screen text-neutral-200 text-[18px] text">
	<Container>
		<StoryControl />
		<Spacer size={70} />
		<StoryHome />

		<Spacer size={100} unit="vh" />
		<Chapter1 />
		<Spacer size={70} unit="vh" />
		<Chapter2 />
		<Spacer size={70} unit='vh' />
		<Chapter3 />
		<Spacer size={70} unit='vh' />
		<Chapter4 />
		<Spacer size={70} unit='vh' />
		<Chapter5 />
		<Spacer size={70} unit='vh' />
	</Container>
</div>
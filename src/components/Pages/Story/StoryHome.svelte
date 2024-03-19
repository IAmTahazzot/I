<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const floatAnimation = () => {
			const tlCan = new TimelineMax({ repeat: -1 });
			const floatingElement = '.floating';
			/*Can Animation*/
			tlCan
				//move top left
				.to(floatingElement, 3, {
					y: '-=30',
					x: '+=20',
					rotation: '-=5',
					ease: Power1.easeInOut
				})

				//move down right
				.to(floatingElement, 2, {
					y: '+=30',
					x: '-=20',
					rotation: '-=5',
					ease: Power1.easeInOut
				})

				.to(floatingElement, 3, {
					y: '-=20',
					rotation: '+=5',
					ease: Power1.easeInOut
				})

				.to(floatingElement, 3, {
					y: '+=20',
					rotation: '+=5',
					ease: Power1.easeInOut
				})

				.to(floatingElement, 3, { y: '-=50', ease: Power1.easeInOut })

				.to(floatingElement, 3, { y: '+=50', ease: Power1.easeInOut })

				.to(floatingElement, 3, { y: '-=30', ease: Power1.easeInOut })

				.to(floatingElement, 3, { y: '+=30', ease: Power1.easeInOut })

				.to(floatingElement, 2, { y: '-=30', ease: Power1.easeInOut })

				.to(floatingElement, 2, { y: '+=30', ease: Power1.easeInOut });
		};
		floatAnimation();
	});
</script>

<svelte:head>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
	></script>
</svelte:head>

<div class="text-center mt-28 font-wrong-free">
	<h1 class="font-wrong-free text-[128px] uppercase floating">My Story</h1>
	<p class="text-[18px] tracking-[.1em]">
		Its about my personal life experiences, ideas and stories
	</p>
	<p class="text-[18px] tracking-[.1em]">10 to 15 Minutes read</p>
	<p class="text-[18px] tracking-[.1em]">Shall we?</p>
	<h2 class="text-[32px] uppercase mt-8">Begin</h2>
</div>

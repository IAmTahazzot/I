<script lang="ts">
	import { onMount } from 'svelte';
	import Spacer from '../../../Container/Spacer.svelte';
	import ChapterContainer from './ChapterContainer.svelte';

	onMount(() => {
		// observe the last-sentence element and add a class once it's in the viewport
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('fadeInUp');
					} else {
						entry.target.classList.remove('fadeInUp');
					}
				});
			},
			{
				threshold: 1
			}
		);

		const lastSentence = document.querySelector('.last-sentence');

		if (lastSentence) {
			observer.observe(lastSentence);
		}
	});
</script>

<p class="text-center font-wrong-free tracking-widest" id="chapter-1">
	Final Chapter
</p>
<h1 class="font-wrong-free text-5xl text-center uppercase mt-3 tracking-wide">
	At the end
</h1>

<ChapterContainer>
	<p>
		My story is not a success story YET! The only success I can say right now is
		that I'm still breathing and working.
	</p>
	<p>Never forget the priority.</p>
	<Spacer size={20} unit="vh" />
	<p class="text-xl uppercase text-center">
		[The Priority]
	</p>
	<p>
		Besides all the things we've learned & seen, World Wars, Pandemics, Racism,
		Religion, Politics, InJustice, Science, Techonology, Broken generation and
		all other things, The best and the most important thing you can do in your
		life is to spend each and every single moment with the -
	</p>
	<h1 class="text-7xl text-center last-sentence font-display">
		People you love
	</h1>

	<img
		src="/img/someone-you-should-care.png"
		alt="someone you should care"
		class="mx-auto"
	/>
</ChapterContainer>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 40px, 0);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	:global(.fadeInUp) {
		animation: fadeInUp 1s ease-out;
	}
	:global(.last-sentence) {
		opacity: 0;
	}
	:global(.last-sentence.fadeInUp) {
		opacity: 1;
	}
</style>

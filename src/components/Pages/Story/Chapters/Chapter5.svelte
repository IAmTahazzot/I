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
	Chapter 5
</p>
<h1 class="font-wrong-free text-5xl text-center uppercase mt-3 tracking-wide">
	The Present
</h1>

<ChapterContainer>
	<p>
		I've learned and seen a lot of things in my life, still I know nothing and
		haven't even seen 1% of this whole planet. Now we all have dreams to explore
		the world and meet new people.
	</p>
	<p>Therefore from NOW ON, I want to live in present.</p>

	<p class="quote">
		No amount of regretting can change the past, and no amount of worrying can
		change the future.
	</p>
	<p>
		That doesn't mean I don't care about future, it's just not to worry too
		much. But It hurts living on present knowing that you can't meet your loved
		ones ever again. The past is like sucking you from you back. Let me ask you
		a question.
	</p>
	<p>
		Can you imagine your life without the person you love the most or or .. can
		you just imagine it for a few seconds?
	</p>
	<p class="uppercase font-bold">Nooo.</p>
	<p>
		I mean, What else we can do? It's inevitable, We are just ****** humans with
		absolutely no f**** power to even live with the person we love the most.
	</p>
	<p>
		I'm not trying to make you feel sad, rather just trying to share my feelings
		& to
	</p>
	<div class="underline">
		<p>Remind your life priority once again!</p>
	</div>
	<p>
		Sometimes there's just no words that can describe how it feels. Even though
		Nobody cares how it feels to be the other person. Still we just do share our
		feelings to make ourselves feel better.
	</p>

	<Spacer size={20} unit="vh" />
	<p class="text-xl uppercase text-center">
		[THE MOST IMPORTANT LESSON I'VE learned]
	</p>
	<p>
		Besides all the things you and I've learned & seen, World Wars, Pandemics,
		Racism, Religion, Politics, InJustice, Science, Techonology and all other
		things, The best and the most important thing you can do in your life is to
		spend each and every single moment with the -
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

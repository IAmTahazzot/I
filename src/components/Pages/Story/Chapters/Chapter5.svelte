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
		I've learned and seen a lot of things in my life, still feels like I know
		nothing and haven't even seen 1% of this whole planet earth. Now I do have a
		wish list (bucket list) to see and learn more about people and this planet.
	</p>
	<p>I want to live in present from NOW ON.</p>
	<p>
		<q>
			No amount of regretting can change the past, and no amount of worrying can
			change the future.
		</q>
	</p>
	<p>
		It hurts living on present knowing that you can't meet your loved ones ever
		again. Let me ask you a question.
	</p>
	<p>
		If you have a beautiful family with full of people who you truly love, Now
		Imagine your are here without the person you love most in the world. Can
		you?
	</p>

	<p>
		<q>Nooo.</q>
	</p>
	<p>
		I'm not trying to make you feel sad, rather just trying to share my
		feelings. Sometimes there's just no words that can describe how it feels.
		Even though Nobody cares how it feels to be the other person. Still we just
		do share our feelings to make ourselves feel better.
	</p>

	<Spacer size={20} unit="vh" />
	<p class="text-xl uppercase text-center">
		[THE MOST IMPORTANT LESSON I'VE learned]
	</p>
	<p>
		Besides all the things you and I've learned & seen, World Wars, Pandemics, Racism,
		Religion, Politics, InJustice, Science, Techonology and all other things,
		The best and the most important thing in your life is to spend each and
		every single moment with the -
	</p>
	<h1 class="text-7xl text-center last-sentence font-display">
		People you love
	</h1>

  <img src='/img/someone-you-should-care.png' alt='someone you should care' class="mx-auto" />
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

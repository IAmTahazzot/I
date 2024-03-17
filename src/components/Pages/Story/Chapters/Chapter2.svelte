<script lang="ts">
	import { onMount } from 'svelte';
	import ChapterContainer from './ChapterContainer.svelte';

	// Observe the all img tags and add a class to them on viewport using IntersectionObserver
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(
				(entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fadeIn');
					} else {
            entry.target.classList.remove('animate-fadeIn');
          }
				},
				{
					root: null,
					rootMargin: '0px',
					threshold: 0.4
				}
			);
		});
			document.querySelectorAll('img').forEach((img) => {
				observer.observe(img);
			});
	});
</script>

<p class="text-center font-wrong-free tracking-widest" id="chapter-1">
	Chapter 2
</p>
<h1 class="font-wrong-free text-5xl text-center uppercase mt-3 tracking-wide">
	Symphony of existence
</h1>

<ChapterContainer>
	<p>Now, let's think less. See what else out there. :)</p>
	<p>
		Here it comes the life when nothing but only fun matters for us. Hope you
		didn't missed any of it or did you?
	</p>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-10  font-wrong-free pt-10">
		<div class="">
			<h3 class="-rotate-[8deg]">Playing Hopscotch with friends</h3>
			<img src="/img/activity-1.png" alt="null" class='animate-left' />
		</div>
		<div class="">
			<h3 class="rotate-[8deg]">
				Oh, Winds blowing. hum... lets fly something
			</h3>
			<img src="/img/activity-2.png" alt="null" class='animate-right' />
		</div>
		<div>
			<h3 class="-rotate-[5deg]">
				Hide and seek was a bit more <br /> popular than others
			</h3>
			<img src="/img/activity-3.png" alt="null" class='animate-left' />
		</div>
		<div>
			<h3 class="rotate-[5deg]">Who can beat him on that?</h3>
			<img src="/img/activity-4.png" alt="null" class='animate-right' />
		</div>
		<div>
			<h3 class="rotate-[5deg]">Lets gooooo..</h3>
			<img src="/img/activity-5.png" alt="null" class='animate-left' />
		</div>
		<div>
			<h3 class="-rotate-[5deg]">Did you missed this one? ah?</h3>
			<img src="/img/activity-6.png" alt="null" class='animate-right' />
		</div>
		<div class="col-span-2 flex items-center justify-center">
			<div>
			<h3 class="rotate-[5deg]">That was our tiffin time</h3>
			<img src="/img/activity-7.png" alt="null" class='animate-left' />
			</div>
		</div>
	</div>

	<p>Hopefully you've done better than me.</p>
	<p>
		As I mentioned before, the environment in which I grew up was not ideal due to the negative influences of those around me. Consequently, my family made the decision to depart from the village in pursuit of a-
	</p>

	<p class="mt-8">better or precisely for a peaceful life, for us!</p>

</ChapterContainer>

<style>
  :global(.animate-fadeIn) {
    transform: translate(0, 0) !important;
  }

  .animate-left {
    transform: translate(-50px, 20px);
    transition: 1s;
  }

  .animate-right {
    transform: translate(50px, 20px);
    transition: 1s;
  }
</style>
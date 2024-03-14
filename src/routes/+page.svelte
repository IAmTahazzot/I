<script lang="ts">
	import Container from '../components/Container/Container.svelte';
	import Nav from '../components/Nav/Nav.svelte';
	import Hello from '../components/Hello/Hello.svelte';
	import Intro from '../components/Pages/Home/Intro.svelte';
	import CaseBlock from '../components/Case/CaseBlock.svelte';

	import { cases } from '../data/cases';
	import Spacer from '../components/Container/Spacer.svelte';
	import InfoBloack from '../components/InfoBlock/InfoBloack.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	const firstFeaturedCase = cases.find((c) => c.isFeatured);
</script>

<svelte:head>
	<title>I&apos;M Tahazzot</title>
</svelte:head>

<div class="h-[1800px] cover-bg">
	<Container>
		<Nav />
		<Hello />
		<Spacer size={50} />
		<Intro />

		<Spacer size={70} />
		<div class="flex itmes-center justify-between">
			<h2 class="font-semibold">(Featured Cases)</h2>
			<h2 class="font-semibold flex items-center gap-x-1">
				<span>Just a bit down</span>
				<div class="animate-bounce">&downarrow;</div>
			</h2>
		</div>
		<Spacer size={20} />
		{#if firstFeaturedCase}
			<CaseBlock
				title={firstFeaturedCase.title}
				slug={firstFeaturedCase.slug}
				clientName={firstFeaturedCase.clientName}
				thumbnail={firstFeaturedCase.thumbnail}
				date={firstFeaturedCase.date}
			/>
		{/if}

		<InfoBloack
		  className='my-[40vh]'
			title="What I do:"
			type="bullet point"
			description={`
				<p>As a full stack developer, I collaborate with companies and organizations globally to enhance their digital presence and drive business growth.</p>
				<p> I work on projects both independently with clients and as a valuable team member in agencies and studios worldwide.</p>`}
		/>
	</Container>
	<Footer />
</div>

<style>
	.cover-bg {
		background: linear-gradient(319deg, #ffffff, #ebf4ff00 30%, #709fe7c7 343%);
	}

	:global(.dark) .cover-bg {
		background: transparent;
	}
</style>

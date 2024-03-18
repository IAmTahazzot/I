<script lang="ts">
	import { onDestroy } from 'svelte';
	import Container from '../../components/Container/Container.svelte';
	import Nav from '../../components/Nav/Nav.svelte';
	import CaseBlock from '../../components/Case/CaseBlock.svelte';
	import { cases } from '../../data/cases';
	import InfoBloack from '../../components/InfoBlock/InfoBloack.svelte';
	import Footer from '../../components/Footer/Footer.svelte';

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			const getTheme = localStorage.getItem('theme');

			if (getTheme === 'dark') return;
			document.documentElement.classList.remove('dark');
			document.documentElement.style.colorScheme = '';
		}
	});
</script>

<svelte:head>
	<title>Cases</title>
	<script>
		document.documentElement.classList.remove('light');
		document.documentElement.classList.add('dark');
		document.documentElement.style.colorScheme = 'dark';
	</script>
</svelte:head>

<div class="bg-dark min-h-screen">
	<Container className="text-white">
		<Nav forcedDarkMode />
		<div>
			<div class="flex items-center mt-[20vh] md:mt-[30vh]">
				<div class="flex flex-col lg:flex-row w-full font-inter">
					<div class="basis-[15%]">
						<div class="flex items-center gap-x-2">
							<div class="h-2 w-2 rounded-full bg-white"></div>
							<span class="text-sm text-white">Cases</span>
						</div>
					</div>
					<div class="flex-1">
						<h1 class="text-4xl md:text-6xl xl:text-7xl leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[75px] tracking-tight text-white">
							Take a glimpse into my recent years of work or explore my groundbreaking AI projects.
						</h1>
						<div class="mt-10 flex items-center justify-start gap-x-8">
							<a href="/lab" class="flex items-center gap-x-2 border rounded px-2 py-1">
								<span> Try AI projects </span>
								<svg
									width="10"
									height="13"
									viewBox="0 0 10 13"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.80718 1.33615L6.60659 0.58752L7.35521 0.386925L7.55581 1.13555L6.80718 1.33615ZM1.66483 11.7933C1.56203 11.9713 1.39273 12.1012 1.19415 12.1544C0.995569 12.2076 0.783986 12.1798 0.605946 12.077C0.427905 11.9742 0.29799 11.8049 0.244781 11.6063C0.191572 11.4077 0.219428 11.1962 0.32222 11.0181L1.66483 11.7933ZM0.253303 2.28988L6.60659 0.58752L7.00777 2.08478L0.654491 3.78713L0.253303 2.28988ZM7.55581 1.13555L9.25817 7.48884L7.76091 7.89003L6.05855 1.53674L7.55581 1.13555ZM7.47848 1.72373L1.66483 11.7933L0.32222 11.0181L6.13588 0.948571L7.47848 1.72373Z"
										fill="white"
									/>
								</svg>
							</a>
							<a href="/cases/unityshop-cms" class="underline underline-offset-4">
								<span>Try my favorite case</span>
							</a>
						</div>
					</div>
					<div class="basis-[10%]"></div>
				</div>
			</div>
		</div>

		<!-- [BEGIN]: Cases -->
		<div class="my-[30vh] space-y-7">
			<div class="flex itmes-center justify-between">
				<h2 class="font-semibold">(All Cases)</h2>
			</div>
			{#each cases as myCase, i}
				<CaseBlock
					title={myCase.title}
					clientName={myCase.clientName}
					date={myCase.date}
					thumbnail={myCase.thumbnail}
					slug={myCase.slug}
					forcedDarkMode
				/>
			{/each}
		</div>
		<!-- [END]: Cases -->

		<InfoBloack
			className="my-[30vh]"
			title="Let&apos;s connect"
			description="Reach out to get the conversation started about your digital business needs."
			showContact
			forcedDarkMode
		/>
	</Container>

	<Footer forcedDarkMode={true} />
</div>

<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { MAIL, LINKEDIN, GITHUB, STACKOVERFLOW } from '../../data/constants';
	import Container from '../../components/Container/Container.svelte';
	import Nav from '../../components/Nav/Nav.svelte';
	import Footer from '../../components/Footer/Footer.svelte';
	import Spacer from '../../components/Container/Spacer.svelte';
	import ContactForm from '../../components/ContactForm/ContactForm.svelte';

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			const getTheme = localStorage.getItem('theme');

			if (getTheme === 'dark') return;
			document.documentElement.classList.remove('dark');
			document.documentElement.style.colorScheme = '';
		}
	});

	export let data;
</script>

<svelte:head>
	<title>Contact</title>
	<script>
		document.documentElement.classList.remove('light');
		document.documentElement.classList.add('dark');
		document.documentElement.style.colorScheme = 'dark';
	</script>
</svelte:head>

<div class="bg-dark text-neutral-100 min-h-[100vh]">
	<Container>
		<Nav forcedDarkMode />
		<div class="max-w-[980px] xl:max-w-[1200px] mx-auto">
			<div class="mt-[30vh]">
				<h1 class="text-3xl font-display">Contact Me</h1>
				<p class="font-inter text-base mt-3 font-normal">
					To get a quote // To start a project // To ask any question you have
				</p>
			</div>
		</div>
	</Container>

	<div class="border-t xl:border-y border-neutral-700 mt-16">
		<div class="grid grid-cols-1 xl:grid-cols-[23%_1px_1fr] xl:max-w-[1200px] xl:mx-auto">
			<div>
				<Container className='xl:mx-0'>

				<div
					class="flex items-center justify-between xl:flex-col xl:items-start xl:gap-y-6 max-w-[980px] mx-auto py-6 xl:py-16"
				>
					<a href={`mailto:${MAIL}`}>{MAIL}</a>
					<div class="flex items-center gap-x-2">
						<a
							href={LINKEDIN}
							class="flex items-center justify-center h-9 w-9 rounded-full border border-neutral-600"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
									fill="#E4E4E7"
								/>
							</svg>
						</a>
						<a
							href={GITHUB}
							class="flex items-center justify-center h-9 w-9 rounded-full border border-neutral-600"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
									fill="#E4E4E7"
								/>
							</svg>
						</a>
					</div>
				</div>
				</Container>
			</div>
			<div class="border-b border-neutral-700 xl:border-b-0 xl:border-l"></div>
			<div>
				<Container>

				<div class="max-w-[980px] xl:w-full mx-auto py-6 xl:py-16 xl:px-8">
					<h2 class="text-6xl md:text-7xl lg:text-8xl font-display font-thin uppercase tracking-tight">
						Hello <br /> Tahazzot,
					</h2>

					<Spacer size={70} />
					<ContactForm data={data} />
				</div>
				</Container>

			</div>
		</div>
	</div>
	<Spacer size={30} unit="vh" />
</div>

<Footer forcedDarkMode />

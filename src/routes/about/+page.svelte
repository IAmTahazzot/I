<script lang="ts">
	import Container from '../../components/Container/Container.svelte';
	import Spacer from '../../components/Container/Spacer.svelte';
	import Footer from '../../components/Footer/Footer.svelte';
	import InfoBloack from '../../components/InfoBlock/InfoBloack.svelte';
	import Nav from '../../components/Nav/Nav.svelte';
	import Media from '../../components/Pages/About/Media.svelte';
	import Services from '../../components/Pages/About/Services.svelte';
	import type { Service } from '../../components/Pages/About/types';

  const services: Service[] = [
    {
      title: 'UI/ UX design',
      description: `Elevate your digital presence with my creative flair and user-centric design, ensuring a
      seamless and engaging experience for your audience. Let's bring your vision to life
      through compelling UI/UX solutions.`
    },
    {
      title: 'Web design <br />/Animation',
      description: `A web designer adept at blending aesthetics and functionality to create visually
      stunning and user-friendly websites. Proficient in leveraging design principles and
      coding skills to craft engaging online experiences.`
    },
    {
      title: 'Full Stack development <br />/API integration',
      description: 'As a full stack web developer, I bring a wealth of modern tech know-how and problem-solving finesse to the table. Let\'s team up to turn your tech dreams into reality and propel your business to new heights!'
    }
  ];
</script>

<svelte:head>
	<title>About me</title>
</svelte:head>

<div>
	<div class="absolute z-[-1] top-0 left-0 w-full h-screen bg-[#C2D6F2] about-cover-bg pointer-events-none"></div>
	<div class="absolute z-0 -top-10 left-0 w-full h-full flex justify-center pointer-events-none">
		<svg class="anim-draw" viewBox="0 0 614 769" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="m267.96.13C388.28,449.15,48.58,546.84,3.82,402.23-40.94,257.63,380.42,93.92,458.27,232.53c40.56,72.21-98.7,240.6-172.15,287.65,134.28-34.43,326.38,62.8,326.38,247.8"
				stroke="#2E2E2E"
			></path>
		</svg>
		<svg
			class="w-[6px] h-auto mt-auto"
			viewBox="0 0 7 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style="transform-origin: 50% 50%; transform: translate(-4.16814px, 4.37098px) rotate(90deg);"
		>
			<path
				d="M0.519532 0.450684C1.51953 3.45068 3.51953 5.45068 6.51953 6.45068C3.51953 7.45068 1.51953 9.45068 0.519532 12.4507"
				stroke="#2E2E2E"
				stroke-linejoin="bevel"
			></path>
		</svg>
	</div>

	<Container>
		<Nav />
		<div class="grid grid-cols-[20%_1fr_10%] items-start mt-[25vh]">
			<div class="flex items-center gap-x-1">
				<div class="h-2 w-2 rounded-lg bg-black"></div>
				<p class="font-semibold text-sm">I&apos;m</p>
			</div>
			<div>
				<h1 class="z-10 relative text-7xl leading-[73px] font-semibold font-inter">
					Building software & <br /> Exploring the planet earth
				</h1>
			</div>
		</div>

		<Spacer size={70} unit={'vh'} />
		<InfoBloack
			title="About me"
			type="bullet point"
			description={`
        <h1>
          I'm a full stack web developer adept in modern technologies, with strong problem-solving and communication skills.</h1>
        <h1>I'm eager to leverage my expertise to drive innovation and success as part of your tech team.</h1> `}
		/>

		<Spacer size={50} unit={'vh'} />
		<div>
			<h2 class="text-[128px] uppercase font-bold font-display tracking-tighter">Services</h2>
			<div class="mt-10">
        <Services {services} />
      </div>
		</div>

    <Spacer size={50} unit={'vh'} />
    <InfoBloack
      title='Hobbies & Interests'
      type='bullet point'
      description='When I’m not at the computer you can find me riding, traveling or watching interesting movies or just enjoing the view.' />

    <Spacer size={20} unit={'vh'} />
    <Media />

    <Spacer size={50} unit={'vh'} />
    <InfoBloack
      title='Outro'
      type='bullet point'
      showContact
      description='Well, I guess that&apos;s it. I would be happy to discuss about your business or ideas to bring it in life.' />
	</Container>

  <Spacer size={30} unit={'vh'} />
  <Footer />
</div>

<style>
	.about-cover-bg {
		clip-path: polygon(0 0, 100% 0, 100% 85%, 0 94%);
	}

	.anim-draw path {
		stroke-dasharray: 2086.12;
		stroke-dashoffset: 2086.12;
		animation: draw 2s linear forwards;
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const target = document.querySelector('.should-animate-fade')

		if (target) {
			window.addEventListener('scroll', () => {
				const scrollY = window.scrollY

				if (scrollY > 100) {
					target.classList.add('animate-fade')
				}
			})
		}
	});
</script>

<div class="flex items-center justify-center relative h-[calc(100vh-40px)]">
	<svg
		width="923"
		height="302"
		viewBox="0 0 923 302"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14 266.692C88.072 221.53 165.059 165.279 192.89 79.4166C197.142 66.2726 200.385 52.3631 198.172 38.7379C196.967 31.2583 193.789 23.6693 187.609 19.2952C179.237 13.3902 167.228 14.9868 158.747 20.7824C150.266 26.578 144.766 35.6761 140.317 44.9053C129.885 66.6225 124.1 90.2424 119.432 113.862C108.08 171.25 100.498 229.512 97.4734 287.928C99.5115 248.54 109.943 199.594 139.155 170.878C155 155.307 184.059 145.88 202.533 162.742C213.688 172.934 210.51 191.261 208.406 204.405C206.324 217.484 202.686 230.978 203.76 244.319C204.681 255.757 209.655 267.457 219.298 273.734C228.239 279.552 239.635 279.88 250.263 278.961C283.311 276.14 318.046 262.974 343.16 241.016C362.138 224.417 379.67 195.767 370.839 169.763C367.573 160.14 360.013 151.698 350.217 148.92C337.462 145.29 323.744 151.698 314.101 160.796C289.535 184.044 287.08 223.433 305.752 251.011C328.828 285.107 373.534 287.425 408.006 269.907C460.755 243.094 500.114 185.706 522.642 132.736C531.189 112.638 540.065 91.9046 542.607 70.0343C544.645 52.4943 542.519 15.8178 516.594 18.0267C487.294 20.5418 472.107 66.3382 464.568 89.2801C454.18 120.883 450.937 154.519 450.608 187.631C450.345 213.678 452.734 253.067 475.525 270.476C482.56 275.856 491.348 278.524 500.114 279.727C520.67 282.548 541.862 277.715 560.27 268.201C615.868 239.463 652.86 172.606 674.643 116.115C682.73 95.1633 689.085 72.8993 686.937 50.5479C686.105 41.756 683.825 32.8329 678.61 25.7032C673.394 18.5735 664.825 13.4558 655.972 14.0463C624.02 16.2334 607.825 61.6798 601.514 86.8963C589.964 133.196 583.171 188.549 596.429 235.046C599.979 247.468 605.392 259.825 614.947 268.573C628.622 281.083 649.354 284.188 667.192 279.049C692.92 271.635 711.307 250.289 722.702 227.041C729.474 213.263 734.23 198.544 741.461 184.985C748.671 171.425 758.906 158.696 772.997 152.573C798.089 141.66 827.608 155.438 840.1 178.489C848.208 193.426 849.764 211.448 845.885 228.003C840.757 249.983 825.483 269.994 804.423 278.218C783.362 286.441 756.999 281.192 742.645 263.761C728.751 246.877 727.896 222.295 734.471 201.453C742.995 174.377 765.984 149.795 794.386 148.33C818.492 147.083 841.108 162.174 865.236 161.561C883.491 161.08 896.202 151.414 909 139.626"
			class="stroke-black dark:stroke-neutral-200"
			stroke-width="28"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>

	<div
		class="flex flex-col items-start gap-y-2 absolute bottom-20 right-0 should-animate-fade"
	>
		<span
			class="cursor-vertical-text vertical-text text-xs uppercase leading-[.25] tracking-wide"
			>Scroll</span
		>
		<div class="animate-bounce">
			<svg
				width="9"
				height="48"
				viewBox="0 0 9 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 0V46L8 37.1717"
					class="stroke-black dark:stroke-neutral-200"
				/>
			</svg>
		</div>
	</div>
</div>

<style>
	.vertical-text {
		writing-mode: vertical-rl;
		text-orientation: upright;
	}

	svg {
		stroke-dasharray: 3500;
		animation: draw 5s cubic-bezier(0.39, 1.21, 0.7, 0.35) forwards;
	}

	@keyframes draw {
		from {
			stroke-dashoffset: 3500;
		}
		to {
			stroke-dashoffset: 0;
		}
	}

	:global(.animate-fade) {
		animation: fade 1s cubic-bezier(0.39, 1.21, 0.7, 0.35) forwards;
	}

	@keyframes fade {
		from {
			transform: translateY(0px);
			opacity: 1;
		}
		to {
			transform: translateY(-20px);
			opacity: 0;
		}
	}
</style>

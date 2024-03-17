<script lang="ts">
	import Container from '../../Container/Container.svelte';

	let isZenMode = false;

	const handleZenMode = () => {
		if (document.fullscreenEnabled && !isZenMode) {
			document.documentElement.requestFullscreen();
		}

		if (isZenMode) {
			document.exitFullscreen();
		}

		isZenMode = !isZenMode;
	};
</script>

<nav class="fixed top-0 left-0 w-full z-10 h-10">
	<Container className="flex items-center justify-between h-full">
    <div></div>
		<div>
			<ul class="flex items-center gap-6 text-xs select-none">
				<li>
					<button
						on:click={handleZenMode}
						aria-label="Enable Full Screen Mode"
						class="flex items-center gap-x-3"
					>
						<span class="uppercase">zen mode</span>
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.25 13.75V10H1.75V12.25H4V13.75H0.25ZM10 13.75V12.25H12.25V10H13.75V13.75H10ZM0.25 4V0.25H4V1.75H1.75V4H0.25ZM12.25 4V1.75H10V0.25H13.75V4H12.25Z"
								fill="white"
							/>
						</svg>
					</button>
				</li>
				<li>
					<div class="flex items-center gap-x-[2px]" data-smart-cursor>
						<div class="note note-1"></div>
						<div class="note note-2"></div>
						<div class="note note-3"></div>
						<div class="note note-4"></div>
						<div class="note note-5"></div>
					</div>
				</li>
			</ul>
		</div>
	</Container>
</nav>

<style>
	.note {
		width: 2px;
		border-radius: 4px;
		position: relative;
		background-color: #fff;
	}

	.note-1 {
		height: 7px;
	}

	.note-2 {
		height: 14px;
	}

	.note-3 {
		height: 18px;
	}

	.note-4 {
		height: 14px;
	}

	.note-5 {
		height: 7px;
	}
</style>

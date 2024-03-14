<script lang="ts">
	import { cn } from '$lib/utils';
	export let form;
	let activeMail;
</script>

<div class="min-h-screen bg-dark text-neutral-200 xl:px-10">
	{#if form && form.body?.login && form.body?.mails}
		<div class="p-1"></div>

		<div class="">
			<aside
				class="xl:fixed top-10 w-full xl:w-[300px] xl:overflow-y-auto xl:h-screen pb-0 xl:pb-24 px-3"
			>
				<div class="flex items-center gap-x-2 mb-8">
					<svg
						width="16"
						height="14"
						viewBox="0 0 16 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M1 3V11C1 11.5304 1.21071 12.0391 1.58579 12.4142C1.96086 12.7893 2.46957 13 3 13H13C13.5304 13 14.0391 12.7893 14.4142 12.4142C14.7893 12.0391 15 11.5304 15 11V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3Z"
							stroke="#ffff"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path d="M3 4L8 7L13 4" stroke="#ffff" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<h3 class="font-semibold text-sm">All({Object.entries(form.body.mails).length || 0})</h3>
				</div>
				<div class="flex flex-col xl:space-y-2">
					{#each Object.entries(form.body.mails) as [key, mail], index}
						<button
							on:click={() => (activeMail = mail)}
							class={cn(
								' bg-neutral-900 xl:rounded-lg p-2 hover:bg-neutral-800 cursor-pointer border-b xl:border-b-0 border-neutral-800',
								{
									'rounded-tl-lg rounded-tr-lg': index === 0,
									'rounded-bl-lg rounded-br-lg border-b-0 mb-3':
										index === Object.entries(form.body.mails).length - 1
								}
							)}
							data-smart-cursor
						>
							<div class="text-left">
								<h2 class="text-white text-sm font-bold">{mail.name || 'Anonymous'}</h2>
								<h2
									class="text-white text-sm font-semibold text-ellipsis text-nowrap overflow-clip"
								>
									{mail.message || 'no text'}
								</h2>
								<h3 class="text-xs rounded-full mt-2 bg-dark p-3 w-fit">
									<!-- check if it's today -->
									{new Date(mail.timestamp).toLocaleDateString('en-US') ===
									new Date().toLocaleDateString('en-US')
										? 'Today'
										: new Date(mail.timestamp).toLocaleTimeString('en-US', {
												hour: 'numeric',
												minute: 'numeric',
												hour12: true
											})}
								</h3>
							</div>
						</button>
					{/each}
				</div>
			</aside>
			<main class={cn('ml-[370px] mt-9 hidden xl:block')}>
				{#if activeMail}
					<div class="flex flex-col gap-y-2">
						<div class="flex items-center justify-between">
							<h2 class="text-lg font-semibold">{activeMail.name || 'Anonymous'}</h2>
							<button
								on:click={() => (activeMail = null)}
								class={cn('bg-neutral-900 rounded-lg p-2 hover:bg-neutral-800 cursor-pointer')}
								data-smart-cursor
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M1 1L15 15M1 15L15 1"
										stroke="#ffff"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>
						</div>
						<div>
							<span class="text-sm">from: </span>
							<a href={`mailto:${activeMail.email}`} class="text-sm">{activeMail.email}</a>
						</div>

						<div class="flex items-center gap-x-1 mb-2">
							<div class='text-xs'>
								Address:
							</div>
							<span class="text-xs">{activeMail.address || 'No address found'}</span>
						</div>
						<div class="flex items-center gap-x-1">
							<div class="w-5">
								<svg
									width="16"
									height="16"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C4.47 20 0 15.5 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0ZM10.5 5V10.25L15 12.92L14.25 14.15L9 11V5H10.5Z"
										fill="white"
									/>
								</svg>
							</div>
							<span class="text-xs"
								>{new Date(activeMail?.timestamp).toLocaleString('en-US', {
									month: 'short',
									day: 'numeric',
									year: 'numeric',
									hour: 'numeric',
									minute: 'numeric',
									hour12: true
								})}</span
							>
						</div>
						<div class="flex items-center gap-x-1">
							<div class="w-5">
								<svg
									width="17"
									height="17"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.6 7H18.4M1.6 13H18.4M1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10Z"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M9.49991 1C7.81525 3.69961 6.92212 6.81787 6.92212 10C6.92212 13.1821 7.81525 16.3004 9.49991 19M10.4999 1C12.1846 3.69961 13.0777 6.81787 13.0777 10C13.0777 13.1821 12.1846 16.3004 10.4999 19"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<span class="text-xs">{activeMail.ip}</span>
						</div>

						<div class="flex items-center gap-x-1 mt-2">
							{#if activeMail.options}
								{#each Object.entries(activeMail.options) as [key, value]}
									<div class="rounded-full py-1 px-3 text-xs bg-emerald-900">{value && key}</div>
								{/each}
							{/if}
						</div>

						<div class="text-pretty whitespace-pre-line py-10">
							{activeMail.message || 'no text'}
						</div>
					</div>
				{:else}
					<div class="text-center hidden xl:block">
						<!-- check if no mails -->
						{#if Object.entries(form.body.mails).length === 0}
							<p class="text-xl">It's okay, You are doing well, just be patient</p>
						{:else}
							<p class="text-xl">Select a mail to view</p>
						{/if}
					</div>
				{/if}
				<div class="p-1"></div>
			</main>
			<!-- Mobile view -->
			{#if activeMail}
				<main class="xl:hidden fixed top-0 left-0 w-full bg-dark z-10 h-full overflow-y-auto">
					<div class="flex flex-col gap-y-2 p-4">
						<div class="flex items-center justify-between">
							<h2 class="text-lg font-semibold">{activeMail.name || 'Anonymous'}</h2>
							<button
								on:click={() => (activeMail = null)}
								class={cn(
									'fixed bottom-[10%] left-1/2 -translate-x-1/2 bg-neutral-900 rounded-full h-10 w-10 z-10 flex items-center justify-center hover:bg-neutral-800 cursor-pointer'
								)}
								data-smart-cursor
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M1 1L15 15M1 15L15 1"
										stroke="#ffff"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>
						</div>
						<div>
							<span class="text-sm">from: </span>
							<a href={`mailto:${activeMail.email}`} class="text-sm">{activeMail.email}</a>
						</div>

						<div class="flex items-center gap-x-1 mb-2">
							<div class='text-xs'>
								Address:
							</div>
							<span class="text-xs">{activeMail.address || 'No address found'}</span>
						</div>
						<div class="flex items-center gap-x-1">
							<div class="w-5">
								<svg
									width="16"
									height="16"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C4.47 20 0 15.5 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0ZM10.5 5V10.25L15 12.92L14.25 14.15L9 11V5H10.5Z"
										fill="white"
									/>
								</svg>
							</div>
							<span class="text-xs"
								>{new Date(activeMail?.timestamp).toLocaleString('en-US', {
									month: 'short',
									day: 'numeric',
									year: 'numeric',
									hour: 'numeric',
									minute: 'numeric',
									hour12: true
								})}</span
							>
						</div>
						<div class="flex items-center gap-x-1">
							<div class="w-5">
								<svg
									width="17"
									height="17"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.6 7H18.4M1.6 13H18.4M1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10Z"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M9.49991 1C7.81525 3.69961 6.92212 6.81787 6.92212 10C6.92212 13.1821 7.81525 16.3004 9.49991 19M10.4999 1C12.1846 3.69961 13.0777 6.81787 13.0777 10C13.0777 13.1821 12.1846 16.3004 10.4999 19"
										stroke="white"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<span class="text-xs">{activeMail.ip}</span>
						</div>
						<div class="flex items-center gap-x-1 mt-2">
							{#if activeMail.options}
								{#each Object.entries(activeMail.options) as [key, value]}
									<div class="rounded-full py-1 px-3 text-xs bg-emerald-900">{value && key}</div>
								{/each}
							{/if}
						</div>
						<div class="text-pretty whitespace-pre-line py-10">
							{activeMail.message || 'no text'}
						</div>
					</div>
				</main>
			{/if}
		</div>
	{:else}
		<div class="flex items-center justify-center h-screen">
			<form method="POST">
				<input
					autofocus
					name="password"
					type="password"
					placeholder="Access Code"
					class="border py-1 px-2 border-emerald-700 focus-visible:border-emerald-500 bg-dark text-emerald-500 placeholder:text-emerald-700 text-xs outline-0"
				/>
				{#if form && form.body?.failed}
					<p class="text-red-500 text-xs mt-2">{form.body.failed}</p>
				{/if}
			</form>
		</div>
	{/if}
</div>

<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageServerData } from '../../routes/contact/$types';
	import { cn } from '$lib/utils';

	const growTextarea = (e: Event & { currentTarget: EventTarget & HTMLTextAreaElement }) => {
		e.currentTarget.style.height = 'auto';
		e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
	};

	const options = {
		createApp: false,
		bugFixing: false,
		other: false
	};

	export let data: PageServerData;

	const {
		form: contactForm,
		errors,
		enhance,
		constraints,
		message,
		submitting
	} = superForm(data.form, {
		dataType: 'json'
	});
</script>

<form method="POST" action="/contact" use:enhance>
	<div class="text-[18px]">
		<div class="flex flex-col md:flex-row gap-7">
			<div class="flex items-center gap-2 relative">
				<label for="name" class="basis-[100px] md:basis-auto">My name is</label>
				<input
					type="text"
					id="name"
					name="name"
					autocomplete="off"
					placeholder="(ex. Anakin Skywalker)"
					bind:value={$contactForm.name}
					class="flex-1 lg:flex-auto"
				/>
				{#if $errors.name}
					<p class="absolute left-0 -bottom-5 pointer-events-none text-red-500 mt-1 text-xs">
						{$errors.name}
					</p>
				{/if}
			</div>
			<div class="flex items-center gap-2">
				<label for="address" class="basis-[100px] md:basis-auto">I&apos;m from</label>
				<input
					type="text"
					id="address"
					name="address"
					placeholder="(ex. Hogwarts)"
					bind:value={$contactForm.address}
					class="flex-1 lg:flex-auto"
					{...$constraints.address}
				/>
			</div>
		</div>

		<div class="mt-8">
			<h2>I would like to discuss:</h2>

			<div>
				<label
					class={cn(
						'flex text-[18px] mt-3 items-center gap-2 customCheckbox',
						options.createApp && 'customCheckboxActive'
					)}
					for="create-an-app"
				>
					<input
						on:change={() => {
							options.createApp = !options.createApp;
							$contactForm.options.createApp = options.createApp;
						}}
						type={'checkbox'}
						value={'Create an app'}
						id="create-an-app"
						class={'accent-[--color-primary] h-6 w-6 hidden'}
					/>
					<div class={'h-6 w-6 border border-zinc-300 p-1 rounded-[2px]'}>
						<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class={'w-full h-full'}
						>
							<path d="M1 5L4 9L9 1" stroke="#f2f3f5" stroke-width={2} />
						</svg>
					</div>
					<span>Create an app</span>
				</label>
				<label
					class={cn(
						'flex text-[18px] mt-3 items-center gap-2 customCheckbox',
						options.bugFixing && 'customCheckboxActive'
					)}
					for="bug-fixing"
				>
					<input
						on:change={() => {
							options.bugFixing = !options.bugFixing;
							$contactForm.options.bugFix = options.bugFixing;
						}}
						id={'bug-fixing'}
						type="checkbox"
						name="bugFix"
						class={'accent-[--color-primary] h-6 w-6 hidden'}
					/>
					<div class={'h-6 w-6 border border-zinc-300 p-1 rounded-[2px]'}>
						<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class={'w-full h-full'}
						>
							<path d="M1 5L4 9L9 1" stroke="#f2f3f5" stroke-width={2} />
						</svg>
					</div>
					<span>Fixing bugs</span>
				</label>
				<label
					class={cn(
						'flex text-[18px] mt-3 items-center gap-2 customCheckbox',
						options.other && 'customCheckboxActive'
					)}
					for="other"
				>
					<input
						on:change={() => {
							options.other = !options.other;
							$contactForm.options.other = options.other;
						}}
						id={'other'}
						type={'checkbox'}
						value={'other'}
						class={'accent-[--color-primary] h-6 w-6 hidden'}
					/>
					<div class={'h-6 w-6 border border-zinc-300 p-1 rounded-[2px]'}>
						<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class={'w-full h-full'}
						>
							<path d="M1 5L4 9L9 1" stroke="#f2f3f5" stroke-width={2} />
						</svg>
					</div>
					<span>Other</span>
				</label>
			</div>
		</div>

		<div class="mt-7">
			<label for="message" class="block">I&apos;ve to say</label>
			<textarea
				on:input={growTextarea}
				name="message"
				id="message"
				rows="3"
				placeholder="Your project/ case details..."
				bind:value={$contactForm.message}
			></textarea>
		</div>

		<div class="mt-7 flex flex-col items-stretch md:flex-row md:items-center gap-x-2">
			<label for="email">You can reach me at</label>
			<input
				type="text"
				id="email"
				name="email"
				placeholder="(ex. )"
				bind:value={$contactForm.email}
				class="flex-1 lg:flex-auto"
			/>
		</div>

		{#if $errors.email}
			<p class="text-red-500 mt-1 text-xs">{$errors.email}</p>
		{/if}
	</div>

	<button
		disabled={$submitting}
		type="submit"
		class="flex items-center gap-x-2 bg-white hover:bg-neutral-300 rounded-full text-neutral-800 py-2 px-12 mt-6 disabled:cursor-not-allowed"
	>
		{#if $submitting}
			<svg
				class="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-800"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.003 8.003 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.86 0-7.321-1.562-9.899-4.1l2.828-2.828z"
				></path>
			</svg>
			<span>Submitting</span>
		{:else}
			Submit
		{/if}
	</button>

	{#if $message?.error}
		<p class="text-red-500 mt-1 text-xs">{$message.error}</p>
	{/if}

	{#if $message?.success}
		<p class="text-green-500 mt-1 text-xs">{$message.success}</p>
	{/if}
</form>

<style>
	input,
	textarea {
		font-size: 15px;
		border-bottom: 1px solid #737475;
		background-color: transparent;
	}

	input {
		padding: 0.5rem;
		outline: 0;
	}

	#email {
		width: auto;
	}

	@media (min-width: 1040px) {
		#email {
			width: 333px;
		}
	}

	textarea {
		width: 100%;
		padding: 0.5em 0;
		resize: none;
		outline: 0;
		overflow: hidden;
	}

	input::placeholder,
	textarea::placeholder {
		color: #737475;
	}

	input:focus,
	textarea:focus {
		border-bottom: 1px solid #fff;
	}

	.customCheckbox svg {
		stroke-dasharray: 16;
		stroke-dashoffset: 16;
		transition: all 0.3s ease;
	}

	.customCheckboxActive svg {
		stroke-dashoffset: 0;
	}
</style>

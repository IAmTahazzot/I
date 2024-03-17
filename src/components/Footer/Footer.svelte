<script lang='ts'>
	import { cn } from '$lib/utils';
	import { MAIL } from '../../data/constants';
	export let forcedDarkMode: boolean = false;

	const links: { name: string; href: string }[] = [
		{ name: 'Mail', href: `mailto:${MAIL}` },
		{ name: 'Github', href: 'https://github.com/iamtahazzot'},
		{ name: 'Linkedin', href: 'https://linkedin.com/iamtahazzot' },
		{ name: 'StackOverflow', href: 'https://stackoverflow.com/users/12661546/t%ce%9bh%ce%9bzz%c3%98t' },
		{ name: 'Contact me', href: '/contact' }
	];

</script>

<footer class={
	cn(
		'bg-[#f5f5f7] dark:bg-[#131416]',
		forcedDarkMode && 'bg-[#131416]'
	)
}>
	<div
		class={
			cn(
				'mx-5 max-w-[980px] lg:mx-auto text-xs -tracking-[0.12px] leading-4 text-neutral-500 dark:text-neutral-400 font-inter',
				forcedDarkMode && 'text-neutral-400'
			)
		}
	>
		<div class="py-5 space-y-4">
			<p>
				With a solid background in software development since 2018, I'm adept at using cutting-edge
				technologies like React.js, Vue.js, Angular, Next.js, Laravel, WordPress, and Node.js. My
				skills also cover various databases such as PostgreSQL, MySQL, MongoDB, and Firebase
				Realtime Database. I focus on solving problems and consistently deliver solutions that meet
				expectations. Committed to excellence and passionate about creating effective systems
			</p>
			<p>
				<strong>[Attention]:</strong> I kindly request that communication be initiated only if there
				exists a well-defined business concept. Presently, I am exclusively engaged with clients possessing
				a clear vision for their business. To streamline the process, envision your idea from the customer/user
				perspective, detailing its functionality. Upon conceptualization, we can delve into further discussions
				to seamlessly integrate it into our project.
			</p>
		</div>

		<div class={
			cn(
				'footer-block',
				'py-5 border-t border-b border-neutral-300 dark:border-neutral-800',
				forcedDarkMode && 'border-neutral-800 forcedDarkMode'
			)
		}>
			<ul>
				<li><span>Links</span></li>
				{#each links as link}
					<li><a target="_blank" href={link.href}>{link.name}</a></li>
				{/each}
			</ul>
			<ul>
				<li><span>Technologies</span></li>
				<li><span>Svelte</span></li>
				<li><span>Angular</span></li>
				<li><span>ReactJS</span></li>
				<li><span>VueJS</span></li>
				<li><span>NodeJS</span></li>
				<li><span>Laravel</span></li>
				<li><span>WordPress</span></li>
			</ul>
			<ul>
				<li><span>Services</span></li>
				<li><span>Full stack development</span></li>
				<li><span>Frontend development</span></li>
				<li><span>UI-UX designs</span></li>
				<li><span>Bug Fixing</span></li>
				<li><span>Database normalization</span></li>
				<li><span>SaaS integration</span></li>
			</ul>
			<ul>
				<li>Quick messages</li>
				<li>
					<form class="space-y-2">
						<input
							type="text"
							placeholder="Your name"
							class="border-b border-neutral-300 dark:border-neutral-500 bg-transparent w-full lg:w-4/6 py-2 outline-none focus-visible:border-neutral-500 dark:focus-visible:border-neutral-700"
						/>
						<input
							type="email"
							placeholder="Email address"
							class="border-b border-neutral-300 dark:border-neutral-500 bg-transparent w-full lg:w-4/6 py-2 outline-none focus-visible:border-neutral-500 dark:focus-visible:border-neutral-700"
						/>
						<textarea
							placeholder="Your message"
							class="border-b border-neutral-300 dark:border-neutral-500 bg-transparent w-full lg:w-4/6 py-2 outline-none focus-visible:border-neutral-500 dark:focus-visible:border-neutral-700 resize-x-none"
							cols="1"
						></textarea>
						<div>
							<button type="submit" class={
								cn(
									'bg-black hover:bg-neutral-800 rounded text-white py-1 px-3 cursor-pointer dark:bg-neutral-300 dark:hover:bg-neutral-400 dark:text-black',
									forcedDarkMode && 'bg-neutral-300 hover:bg-neutral-400 text-black'
								)
							}> Send </button>
						</div>
					</form>
				</li>
			</ul>
		</div>

		<div class="py-5">
			<p>&copy; {new Date().getFullYear()} Tahazzot. All rights reserved.</p>
		</div>
	</div>
</footer>

<style>
	.footer-block {
		display: grid;
		grid-template-columns: repeat(3, 23%) 1fr;
	}

	@media screen and (max-width: 768px) {
		.footer-block {
			grid-template-columns: repeat(2, 50%);
			row-gap: 2rem;
		}
	}

	@media screen and (max-width: 480px) {
		.footer-block {
			grid-template-columns: 1fr;
		}
	}

	.footer-block ul li:first-child {
		font-weight: 600;
		color: var(--color-dark);
	}


	.forcedDarkMode.footer-block ul li:first-child {
		color: #dbdbdb;
	}

	.footer-block ul li {
		margin-bottom: 0.8rem;
	}

	.footer-block ul li a:hover {
		text-decoration: underline;
	}
</style>

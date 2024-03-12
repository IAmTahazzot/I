<script>
	import { MAIL } from '../../data/constants';
</script>

<footer class="bg-[#f5f5f7]">
	<div
		class="max-w-[980px] mx-auto text-xs -tracking-[0.12px] leading-4 text-neutral-500 font-inter"
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

		<div class="footer-block py-5 border-t border-b border-neutral-300">
			<ul>
				<li><span>More contact</span></li>
				<li><a href={`mailto:${MAIL}`}>Mail</a></li>
				<li><a href="https://linkedin.com/iamtahazzot">Linkedin</a></li>
				<li>
					<a href="https://stackoverflow.com/users/12661546/t%ce%9bh%ce%9bzz%c3%98t"
						>StackOverflow</a
					>
				</li>
				<li><a href="/contact">Contact me</a></li>
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
							class="border-b border-neutral-300 bg-transparent w-4/6 py-2 outline-none focus-visible:border-neutral-500"
						/>
						<input
							type="email"
							placeholder="Email address"
							class="border-b border-neutral-300 bg-transparent w-4/6 py-2 outline-none focus-visible:border-neutral-500"
						/>
						<textarea
							placeholder="Your message"
							class="border-b border-neutral-300 bg-transparent w-4/6 py-2 outline-none focus-visible:border-neutral-500 resize-x-none"
							cols="1"
						></textarea>
						<div>
							<button type="submit" class="bg-black hover:bg-neutral-800 rounded text-white py-1 px-3 cursor-pointer"> Send </button>
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

	.footer-block ul li:first-child {
		font-weight: 600;
		color: var(--color-dark);
	}

	.footer-block ul li {
		margin-bottom: 0.8rem;
	}

	.footer-block ul li a:hover {
		text-decoration: underline;
	}
</style>

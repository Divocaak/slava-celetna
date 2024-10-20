<script>
	import Navbar from '$lib//Navbar.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';
</script>

<svelte:head>
	<meta name="author" content="Vojtěch Divoký" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
	/>
</svelte:head>

<Navbar />

<div class="wrapper">
	<slot />
	<p class="signature">
		Developed by<ButtonLink
			label="Vojtěch Divoký"
			href="https://divokyvojtech.cz"
			target="_blank"
			uppercase={false}
		/>&copy; 2024
	</p>
</div>

<style>
	:global(:root) {
		--green: #8dcaa9;
		--pink: #e795b6;
		--white: #ffffff;

		--py: 10vh;
		--px: 10vw;
	}

	:global(body) {
		background-color: var(--green);
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(html, div, body) {
		margin: 0;
		padding: 0;
	}

	:global(h1, h2, h3, p, b) {
		color: var(--white);
	}

	:global(h1, h2, h3) {
		font-weight: 600;
		font-size: calc(1.536vw + 59px / 2);
		/* line-height: 71px; */

		text-transform: uppercase;
	}

	:global(p) {
		font-weight: 300;
		font-size: calc(0.938vw + 36px / 2);
		/* line-height: 44px; */
		letter-spacing: -0.04em;
	}

	.wrapper {
		position: relative;
		min-height: 100vh;
		height: auto;
	}

	.signature {
		position: absolute;
		right: 10px;
		bottom: 0;

		width: 100%;

		font-size: 0.75em;
		text-align: end;

		margin: 0;
	}
</style>
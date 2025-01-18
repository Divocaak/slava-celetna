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
	/* Amiamie Black */
	@font-face {
		font-family: 'Amiamie';
		src: url('/fonts/Amiamie-Black.ttf') format('truetype');
		font-weight: 900; /* Black */
		font-style: normal;
	}

	/* Amiamie Light */
	@font-face {
		font-family: 'Amiamie';
		src: url('/fonts/Amiamie-Light.ttf') format('truetype');
		font-weight: 300; /* Light */
		font-style: normal;
	}

	/* Eilis Regular */
	@font-face {
		font-family: 'Eilis';
		src: url('/fonts/Eilis-Regular.ttf') format('truetype');
		font-weight: 400; /* Regular */
		font-style: normal;
	}

	:global(:root) {
		--green: #8dcaa9;
		--pink: #e795b6;
		--white: #ffffff;

		--py: 10vh;
		--px: 10vw;
	}

	:global(.eilis){
		font-family: 'Eilis', Arial, Helvetica, sans-serif;
	}
	:global(.amiamie){
		font-family: 'Amiamie', Arial, Helvetica, sans-serif;
	}
	:global(.amiamie-black){
		font-family: 'Amiamie', Arial, Helvetica, sans-serif;
		font-weight: 900;
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

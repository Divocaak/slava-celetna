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

		/* vw = px value / 19.2 */
		/* rem = px value / 16 */
		--fs-12: clamp(12px, 0.625vw, 1rem);
		--fs-14: clamp(14px, 0.73vw, 1.25rem);
		--fs-16: clamp(16px, 0.83vw, 1.5rem);
		--fs-18: clamp(18px, 0.94vw, 1.75rem);
		--fs-20: clamp(20px, 1.04vw, 2rem);
		--fs-24: clamp(24px, 1.25vw, 2.5rem);
		--fs-32: clamp(32px, 1.67vw, 3rem);
		--fs-48: clamp(48px, 2.5vw, 3rem);
		--fs-64: clamp(64px, 3.33vw, 4rem);
		--fs-72: clamp(72px, 3.75vw, 4.5rem);
	}

	:global(.eilis) {
		font-family: 'Eilis', Arial, Helvetica, sans-serif;
	}
	:global(.amiamie) {
		font-family: 'Amiamie', Arial, Helvetica, sans-serif;
	}
	:global(.amiamie-black) {
		font-family: 'Amiamie', Arial, Helvetica, sans-serif;
		font-weight: 900;
	}

	:global(body) {
		background: linear-gradient(to right top, #59b282, var(--green), #59b282),
			url('data:image/png;base64,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');
		background-blend-mode: overlay;
		position: relative;
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
		font-size: var(--fs-48);
		line-height: 71px;

		text-transform: uppercase;
	}

	:global(p) {
		font-weight: 300;
		font-size: var(--fs-24);
		line-height: 44px;
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

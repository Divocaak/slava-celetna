<script>
	import ButtonLink from '$lib/ButtonLink.svelte';
</script>

<svelte:head>
	<meta name="author" content="Vojtěch Divoký" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</svelte:head>

<slot></slot>
<p class="signature">
	Developed by<ButtonLink
		label="Vojtěch Divoký"
		href="https://divokyvojtech.cz"
		target="_blank"
		uppercase={false}
	/>&copy; 2024
</p>

<style>
	:global(:root) {
		--green: #8dcaa9;
		--pink: #e795b6;
		--white: #ffffff;

		--py: 10vh;
		--px: 5vw;
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

	:global(h1, h2, h3){
		text-transform: uppercase;
	}

	.signature {
		font-size: 0.75em;
		position: relative;
		right: 10px;
		width: 100%;
		text-align: end;
		margin: 0;
	}
</style>

<slot></slot>

<style>
	:global(:root) {
		--green: #8dcaa9;
		--pink: #e795b6;
		--white: #ffffff;

		--py: 10vh;
		--px: 5vw;
	}

	:global(html, div, body) {
		margin: 0;
		padding: 0;
	}

	:global(h1, h2, h3, p) {
		color: var(--white);
	}
</style>

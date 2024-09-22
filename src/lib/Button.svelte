<script>
	export let label;
</script>

<button on:click><slot name="icon-pre" />{label}<slot name="icon-post" /></button>

<style>
	button {
		all: unset;

		position: relative;
		color: var(--white);
		text-transform: uppercase;
		text-decoration: none;
		padding: 0 5px;
	}

	button::before {
		position: absolute;
		left: 0;
		bottom: 0;

		content: '';
		background-color: var(--pink);

		width: 0;
		height: 8px;

		z-index: -1;
		transition: all 0.3s ease-in-out;
		opacity: 1;
	}

	button:hover {
		cursor: pointer;
	}

	button:hover::before {
		width: 100%;
	}
</style>

<script>
	export let id;
	export let designer;
</script>

<a href="/designers/{id}">
	<div class="img-wrapper">
			<img src="/dynamic/imgs/{id}/{designer.tileImage}" alt="{designer.label} tile image" />
			<div></div>
	</div>
	<p>{designer.label}</p>
</a>

<style>
	a {
		all: unset;
		cursor: pointer;
	}

	.img-wrapper {
		position: relative;
		aspect-ratio: 1/1;

		transition: all 0.45s;
	}

	img {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.img-wrapper div {
		position: absolute;
		width: 100%;
		height: 99.25%;
		top: 0;
		left: 0;

		background: linear-gradient(0deg, var(--pink) 0%, rgba(255, 255, 255, 0) 100%);
		opacity: 0;

		transition: all 0.45s;
	}

	a p {
		transition: all 0.65s;
		text-transform: uppercase;
	}

	a:hover .img-wrapper {
		transform: scale(1.05);
		z-index: 10;
	}

	a:hover .img-wrapper div {
		opacity: 0.6;
	}

	a:hover p {
		letter-spacing: 0.075em;
		margin-left: 2em;
		color: var(--pink);
	}
</style>

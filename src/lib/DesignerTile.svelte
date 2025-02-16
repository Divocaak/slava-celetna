<script>
	export let id;
	export let designer;
</script>

<a href="/designers/{id}">
	<div class="img-wrapper">
		<img src="/dynamic/imgs/{id}/{designer.tileImage}" alt="{designer.label} tile image" />
		<div></div>
	</div>
	<p class="amiamie">{designer.label}</p>
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
		height: 100%;
		top: -4px;
		left: 0;

		background: linear-gradient(0deg, var(--pink) 0%, rgba(255, 255, 255, 0) 100%);
		opacity: 0;

		transition: all 0.45s;
	}

	a p {
		transition: all 0.65s;
		text-transform: uppercase;
		margin-top: 1rem;
	}

	a:hover .img-wrapper {
		transform: scale(1.05);
		z-index: 10;
	}
	
	a:hover .img-wrapper div {
		opacity: 0.6;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
	}

	a:hover p {
		margin-left: 1em;
		color: var(--pink);
	}
</style>

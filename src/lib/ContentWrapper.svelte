<script>
	import TextLink from '$lib/TextLink.svelte';

	export let id;
	export let title;
	export let topText;
	export let bottomText;
	export let linkText;
	export let href;
	export let topImgSrc;
	export let topImgAlt = 'alt';
	export let bottomImgSrc;
	export let bottomImgAlt = 'alt';
	export let imgsLeft = false;
</script>

<div class="wrapper" {id}>
	{#if imgsLeft}
		<div class="imgs-container left">
			<img src={topImgSrc} alt={topImgAlt} />
			<img src={bottomImgSrc} alt={bottomImgAlt} />
		</div>
	{/if}
	<div class="texts-container" class:left={imgsLeft}>
		<h2>{title}</h2>
		<p>{topText}</p>
		<p>{@html bottomText} <TextLink {href} text={linkText} /></p>
	</div>
	{#if !imgsLeft}<div class="imgs-container">
			<img src={topImgSrc} alt={topImgAlt} />
			<img src={bottomImgSrc} alt={bottomImgAlt} />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		min-height: calc(100vh - 2 * var(--py));

		padding: var(--py) var(--px);

		display: flex;

		overflow: hidden;
	}

	.texts-container {
		width: calc(55% - 100px);

		padding: 0 50px;
	}

	.texts-container h2 {
		text-align: center;
		text-transform: uppercase;
	}

	.imgs-container {
		position: relative;
		width: 45%;
	}

	.imgs-container img {
		position: absolute;
		object-fit: cover;
		transition: all 0.45s ease-in-out;
		pointer-events: all;
	}

	.imgs-container img:hover {
		transform: scale(1.05) rotate(2deg);
		z-index: 2;
	}

	.imgs-container img:first-of-type {
		width: 50%;
		height: 50%;
		z-index: 2;
	}

	.imgs-container img:last-of-type {
		top: 40%;
		left: 30%;

		width: 60%;
		height: 60%;
	}

	.imgs-container.left {
		transform: scaleX(-1);
	}

	.imgs-container.left img {
		transform: scaleX(-1);
	}

	.imgs-container.left img:hover {
		transform: scaleX(-1.05) scaleY(1.05) rotate(-2deg);
		z-index: 2;
	}
</style>

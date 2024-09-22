<script>
	import AnimatedLink from '$lib/AnimatedLink.svelte';

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

<div class="wrapper">
	{#if imgsLeft}
		<div class="imgs-container left">
			<img src={topImgSrc} alt={topImgAlt} />
			<img src={bottomImgSrc} alt={bottomImgAlt} />
		</div>
	{/if}
	<div class="texts-container" class:left={imgsLeft}>
		<h1>{title}</h1>
		<p>{topText}</p>
		<p>{@html bottomText} <AnimatedLink {href} text={linkText} /></p>
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

		background-color: var(--green);

		display: flex;

		overflow: hidden;
	}

	.texts-container {
		width: calc(55% - 100px);

		padding: 0 50px;
	}

	.texts-container h1 {
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
</style>

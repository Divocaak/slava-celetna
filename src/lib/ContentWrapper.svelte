<script>
	import TextLink from '$lib/TextLink.svelte';

	export let id;
	export let title;
	export let topText;
	export let bottomText = null;
	export let linkText = null;
	export let href = null;
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
	<div class="content-container" class:left={imgsLeft}>
		<h1 class="eilis">{title}</h1>
		{#if topText || bottomText || (linkText && href)}
			<div class="texts-container amiamie">
				{#if topText}<p>{@html topText}</p>{/if}
				{#if bottomText}
					<p>
						{@html bottomText}
						{#if linkText && href}
							<TextLink {href} text={linkText} />
						{/if}
					</p>
				{/if}
			</div>
		{/if}
		<div>
			<slot></slot>
		</div>
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

	.content-container {
		width: calc(55% - 100px);

		padding: 0 50px;

		white-space: pre-line;

		display: flex;
		flex-direction: column;
	}

	.content-container h1 {
		text-align: center;
		text-transform: uppercase;
	}

	.texts-container {
		position: relative;
		height: 100%;
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

	.imgs-container:has(img:hover) img:first-of-type {
		transform: scale(1.05) rotate(-2deg);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
	}
	
	.imgs-container:has(img:hover) img:last-of-type {
		transform: scale(1.05) rotate(2deg);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
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

	.imgs-container.left:has(img:hover) img:first-of-type {
		transform: scaleX(-1.05) scaleY(1.05) rotate(2deg);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
	}

	.imgs-container.left:has(img:hover) img:last-of-type {
		transform: scaleX(-1.05) scaleY(1.05) rotate(-2deg);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
	}
</style>

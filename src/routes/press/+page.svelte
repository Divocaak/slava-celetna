<script>
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import PublicityRow from '$lib/PublicityRow.svelte';
	import DoodleWrapper from '$lib/doodles/DoodleWrapper.svelte';
	import LinesAltDoodle from '$lib/doodles/LinesAltDoodle.svelte';
	import CurveDoodle from '$lib/doodles/CurveDoodle.svelte';
	import { onMount } from 'svelte';

	let publicity = [];
	onMount(async () => {
		const res = await fetch('/dynamic/publicity.json');
		publicity = await res.json();
	});
</script>

<DoodleWrapper>
	<CurveDoodle top="30vh"/>
	<LinesAltDoodle top="40vh" right="-20vw" />
</DoodleWrapper>

<ContentWrapper
	id="about-panel"
	title="pro press"
	bottomText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent id justo in neque elementum ultrices. Duis risus. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Sed ac dolor sit amet purus malesuada congue. Integer in sapien. Phasellus et lorem id felis nonummy placerat. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede."
	topImgSrc="/_placeholders/0.jpg"
	bottomImgSrc="/_placeholders/1.jpg"
	linkText="presskit"
	href="https://drive.google.com/"
	imgsLeft={true}
/>
<h1>napsali o nás</h1>
<div class="holder">
	{#each publicity as entry}
		<PublicityRow {entry} />
	{/each}
</div>

<style>
	.holder {
		padding: var(--py) var(--px);
	}

	h1 {
		text-align: center;
	}

	@media screen and (min-width: 701px) and (max-width: 1200px) {
		.holder {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (max-width: 700px) {
		.holder {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>

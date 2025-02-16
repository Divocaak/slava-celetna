<script>
	import DesignerTile from '$lib/DesignerTile.svelte';
	import DoodleWrapper from '$lib/doodles/DoodleWrapper.svelte';
	import LinesAltDoodle from '$lib/doodles/LinesAltDoodle.svelte';
	import LinesDoodle from '$lib/doodles/LinesDoodle.svelte';
	import CurveAltDoodle from '$lib/doodles/CurveAltDoodle.svelte';
	import LoopAltDoodle from '$lib/doodles/LoopAltDoodle.svelte';
	import { onMount } from 'svelte';

	let designers = [];
	onMount(async () => {
		const res = await fetch('/dynamic/designers.json');
		designers = Object.entries(await res.json());
	});
</script>

<DoodleWrapper>
	<CurveAltDoodle />
	<LinesDoodle top="-10vh" right="-20vw" />
	<LinesAltDoodle top="120vh" left="-20vw" />
	<LoopAltDoodle top="60vh"/>
</DoodleWrapper>

<div class="wrapper">
	<h1 class="eilis">our designers</h1>
	<div class="holder">
		{#each designers as entry}
			<DesignerTile id={entry[0]} designer={entry[1]} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		padding: var(--py) var(--px);
	}

	h1 {
		text-align: center;
	}

	.holder {
		position: relative;
		display: grid;
		gap: calc(var(--px) / 2);

		grid-template-columns: repeat(3, 1fr);
		/* grid-auto-rows: minmax(300px, auto); */
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

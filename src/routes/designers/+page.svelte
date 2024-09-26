<script>
	import Navbar from '$lib//Navbar.svelte';
	import DesignerTile from '$lib/DesignerTile.svelte';
	import { onMount } from 'svelte';

	let designers = [];
	onMount(async () => {
		const res = await fetch('/dynamic/designers.json');
		designers = Object.entries(await res.json());
	});
</script>

<Navbar />

<div class="wrapper">
	<h1>our designers</h1>
	<div class="holder">
		{#each designers as entry}
			<DesignerTile id={entry[0]} designer={entry[1]} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		position: relative;
		min-height: 100vh;

		padding: var(--px) var(--py);
	}

	.wrapper h1 {
		text-align: center;
	}

	.holder {
		position: relative;
		display: grid;
		gap: 10px;

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

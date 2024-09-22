<script>
	import Button from '$lib/Button.svelte';
	import Menu from '$lib/Menu.svelte';

	let open;
</script>

<div class="wrapper">
	<Button on:click={() => console.log('asdasd')} label="cz/en" />
	<slot></slot>
	<Button on:click={() => (open = !open)} label="& more">
		<svg
			slot="icon-post"
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-list"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
			/>
		</svg>
	</Button>
</div>
<Menu bind:open />

<style>
	.wrapper {
		position: absolute;
		width: 100%;
		display: inline-flex;
		justify-content: space-between;
		z-index: 2;
	}
</style>

<script>
	import Button from '$lib/Button.svelte';
	import Menu from '$lib/Menu.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';

	let open;
</script>

<div class="wrapper">
	<Button on:click={() => console.log('asdasd')} label="cz/en" />
	<ButtonLink label="concept store" href="/#concept-store" />
	<ButtonLink label="event space" href="/#event-space" />
	<ButtonLink label="creative hub" href="/#creative-hub" />
	<Button on:click={() => (open = !open)} label="& more">
		<i slot="icon-post" class="bi bi-list" style="margin-left:2px;"></i>
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

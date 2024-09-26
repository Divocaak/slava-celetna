<script>
	import Navbar from '$lib//Navbar.svelte';
</script>

<Navbar />
<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		position: relative;
		min-height: 100vh;

		padding: var(--px) var(--py);
	}
</style>

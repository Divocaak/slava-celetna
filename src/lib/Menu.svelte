<script>
    import { slide } from 'svelte/transition';
	import Button from '$lib/Button.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';

	export let open;
</script>

{#if open}
	<div transition:slide>
		<Button on:click={() => (open = !open)} label="close">
			<i slot="icon-pre" class="bi bi-x" style="margin-right:2px;"></i>
		</Button>
		<ButtonLink label="about" href="/about" />
		<ButtonLink label="designers" href="/designers" />
		<ButtonLink label="for rent" href="/rent" />
		<ButtonLink label="press" href="/press" />
	</div>
{/if}

<style>
	div {
		position: absolute;
        right: 0;

        display: flex;
        flex-direction: column;
        align-items: end;
		
        background-color: var(--green);
        border-left: 1px solid var(--white);
        border-bottom: 1px solid var(--white);

		z-index: 10;

        padding: 25px 50px;
	}
</style>

<script>
    import { slide } from 'svelte/transition';
	import Button from '$lib/Button.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';

	export let open;
</script>

{#if open}
	<div transition:slide>
		<Button on:click={() => (open = !open)} label="close">
			<svg
				slot="icon-pre"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-x"
				viewBox="0 0 16 16"
			>
				<path
					d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
				/>
			</svg>
		</Button>
		<ButtonLink label="concept store" href="#concept-store" />
		<ButtonLink label="event space" href="#event-space" />
		<ButtonLink label="creative hub" href="#creative-hub" />
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

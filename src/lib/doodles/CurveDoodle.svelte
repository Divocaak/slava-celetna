<script>
	import DoodlePrefab from '$lib/doodles/DoodlePrefab.svelte';
	export let top = 'auto';
	export let bottom = 'auto';
	export let left = 'auto';
	export let right = 'auto';
</script>

<DoodlePrefab
	defaultSvg="M241.5 658C210.641 588.992 110.196 533.872 158.5 327C206.804 120.128 219.578 60.9588 3 10"
	positionSvg="M240.5 658C171.5 614 76.8624 528.769 157.5 327C238.138 125.231 225.5 33.5 2 10"
	w="251"
	h="663"
	{top}
	{bottom}
	{left}
	{right}
/>

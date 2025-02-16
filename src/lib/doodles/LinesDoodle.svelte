<script>
	import DoodlePrefab from '$lib/doodles/DoodlePrefab.svelte';
	export let top = 'auto';
	export let bottom = 'auto';
	export let left = 'auto';
	export let right = 'auto';
</script>

<DoodlePrefab
	defaultSvg="M131 8L659 475M6.5 55.5L457.5 393.5"
	positionSvg="M104.5 8.5L714 495M6 83L537 418.5"
	w="721"
	h="503"
	{top}
	{bottom}
	{left}
	{right}
/>
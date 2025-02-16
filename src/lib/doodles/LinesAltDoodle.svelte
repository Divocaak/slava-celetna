<script>
	import DoodlePrefab from '$lib/doodles/DoodlePrefab.svelte';
	export let top = 'auto';
	export let bottom = 'auto';
	export let left = 'auto';
	export let right = 'auto';
</script>

<DoodlePrefab
	defaultSvg="M6 431L608.5 8.5M190.5 410L533 132.5"
	positionSvg="M7 530.5L673 8M184.5 516.5L583 148.5"
	w="680"
	h="539"
	{top}
	{bottom}
	{left}
	{right}
/>
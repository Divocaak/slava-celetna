<script>
	import DoodlePrefab from '$lib/doodles/DoodlePrefab.svelte';
	export let top = 'auto';
	export let bottom = 'auto';
	export let left = "-5vw";
	export let right = 'auto';
</script>

<DoodlePrefab
	defaultSvg="M455.5 3C490.16 170.913 366.282 250.723 25.5 395.5V583.5C143.5 605 284 599 284 728.5C284 879.275 139 919 11 989.5L25.5 1291C141 1474.5 284 1551.5 439.5 1628"
	positionSvg="M455.5 4C529.146 193.749 404.531 273.146 25.5 396.5V584.5C148.743 584.783 301.155 606 309 731C316.845 856 153.793 953.534 11 990.5L25.5 1292C138.718 1529.2 281.888 1602.21 439.5 1629"
	w="486"
	h="1639"
	{top}
	{bottom}
	{left}
	{right}
/>
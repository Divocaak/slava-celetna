<script>
	import ContentWrapper from '$lib/ContentWrapper.svelte';

	export let data;
</script>

<ContentWrapper
	id="designer-panel"
	title={data.designer.label}
	topText={data.designer.description}
	topImgSrc="/dynamic/imgs/{data.id}/{data.designer.topImage}"
	bottomImgSrc="/dynamic/imgs/{data.id}/{data.designer.bottomImage}"
/>

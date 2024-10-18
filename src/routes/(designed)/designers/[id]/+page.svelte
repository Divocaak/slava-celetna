<script>
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';

	export let data;
</script>

<ButtonLink label="designers" href="/designers">
	<i class="bi bi-arrow-left" style="margin-right:5px;"></i>
</ButtonLink>
<ContentWrapper
	id="designer-panel"
	title={data.designer.label}
	topText={data.designer.description}
	topImgSrc="/dynamic/imgs/{data.id}/{data.designer.topImage}"
	bottomImgSrc="/dynamic/imgs/{data.id}/{data.designer.bottomImage}"
>
	{#if data.designer.instagram}
		<div class="btn-wrapper">
			<ButtonLink
				href="https://instagram.com/{data.designer.instagram}"
				label="instagram"
				target="_blank"
			>
				<i class="bi bi-instagram" style="margin-right:5px;"></i>
			</ButtonLink>
		</div>
	{/if}
	{#if data.designer.facebook}
		<div class="btn-wrapper">
			<ButtonLink
				href="https://facebook.com/{data.designer.facebook}"
				label="facebook"
				target="_blank"
			>
				<i class="bi bi-facebook" style="margin-right:5px;"></i>
			</ButtonLink>
		</div>
	{/if}
	{#if data.designer.web}
		<div class="btn-wrapper">
			<ButtonLink href={data.designer.web} label="web" target="_blank">
				<i class="bi bi-globe2" style="margin-right:5px;"></i>
			</ButtonLink>
		</div>
	{/if}
</ContentWrapper>

<style>
	.btn-wrapper {
		position: relative;
		width: 100%;
		padding-top: 10px;
	}
</style>

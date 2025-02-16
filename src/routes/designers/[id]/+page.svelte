<script>
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';
	import DoodleWrapper from '$lib/doodles/DoodleWrapper.svelte';
	import LinesDoodle from '$lib/doodles/LinesDoodle.svelte';
	import CurveAltDoodle from '$lib/doodles/CurveAltDoodle.svelte';

	export let data;
</script>

<DoodleWrapper>
	<LinesDoodle top="10vh" right="-25vw" />
	<CurveAltDoodle left="-15vw" />
</DoodleWrapper>

<div class="back-link-button-wrapper">
	<ButtonLink label="designers" href="/designers">
		<i class="bi bi-arrow-left" style="margin-right:5px;"></i>
	</ButtonLink>
</div>
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
	.back-link-button-wrapper {
		padding: var(--py) calc(2 * var(--px)) 0 calc(2 * var(--px));
	}

	.btn-wrapper {
		position: relative;
		width: 100%;
		padding-top: 10px;
	}
</style>

<script>
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import DoodleWrapper from '$lib/doodles/DoodleWrapper.svelte';
	import LinesDoodle from '$lib/doodles/LinesDoodle.svelte';
	import CurveDoodle from '$lib/doodles/CurveDoodle.svelte';
	import LoopDoodle from '$lib/doodles/LoopDoodle.svelte';
	import ContactPerson from '../lib/ContactPerson.svelte';
</script>

<!-- https://yqnn.github.io/svg-path-editor/ -->
<svg class="clip-path-svg" width="0" height="0">
	<clipPath id="clip-path" clipPathUnits="objectBoundingBox">
		<path
			d="m0 0s.465 0 .465 0c.016.2.16.18.353.24.321.1.128.234.059.262-.2.093-.377.1-.072.31.104.08.088.16-.805.188"
		></path>
	</clipPath>
</svg>

<div class="landing">
	<div class="text-wrapper">
		<h1 class="eilis">sláva!</h1>
		<p class="amiamie-black">where fashion meets people</p>
	</div>
</div>

<DoodleWrapper>
	<CurveDoodle top="10vh" />
	<LoopDoodle top="80vh" left="-5vw" />
	<LinesDoodle right="-30vw" top="250vh" />
	<CurveDoodle top="310vh" />
</DoodleWrapper>

<ContentWrapper
	id="concept-store"
	title="concept store"
	topText="Cutting-edge concept store in The very center in Prague."
	bottomText="It is run by non profit and it supports and represents Czech designers and brands. Some of them young and thriving, some of them quite established. See more about our member designers"
	linkText="here."
	href="/designers"
	topImgSrc="/_placeholders/0.jpg"
	bottomImgSrc="/_placeholders/1.jpg"
/>
<ContentWrapper
	id="event-space"
	title="event space"
	topText="We are holding events showcasing Czech fashion design like fashion shwos, pop-ups, networks etc."
	bottomText="We also rent our unique and cariable space of 200 m<sup>2</sup> for private and public events like parties, press conferences, pop-ups and more. You can find more info about it at"
	linkText="&quot;for rent&quot;."
	href="/rent"
	topImgSrc="/_placeholders/0.jpg"
	bottomImgSrc="/_placeholders/1.jpg"
	imgsLeft={true}
/>
<ContentWrapper
	id="creative-hub"
	title="creative hub"
	topText="We are holding events showcasing Czech fashion design like fashion shwos, pop-ups, networks etc."
	bottomText="We also rent our unique and cariable space of 200 m<sup>2</sup> for private and public events like parties, press conferences, pop-ups and more. You can find more info about it at"
	linkText="&quot;for rent&quot;."
	href="/rent"
	topImgSrc="/_placeholders/0.jpg"
	bottomImgSrc="/_placeholders/1.jpg"
/>
<div class="contact">
	<h1 class="eilis">contact</h1>
	<div class="wrapper">
		<div class="list">
			<ContactPerson
				name="Teraza Váchová"
				mail="tereza@skinonthemarket.cz"
				tel="+420731469377"
				telLabel="+420&nbsp;731&nbsp;469&nbsp;377"
			/>
			<ContactPerson
				name="Jarmila Kytlicová"
				mail="jarmila@skinonthemarket.cz"
				tel="+420111222333"
				telLabel="+420&nbsp;111&nbsp;222&nbsp;333"
			/>
			<ContactPerson
				name="Markéta Košařová"
				mail="marketa@skinonthemarket.cz"
				tel="+420444555666"
				telLabel="+420&nbsp;444&nbsp;555&nbsp;666"
			/>
		</div>
		<div class="loc">
			<p class="amiamie"><b>Celetná&nbsp;12, Praha&nbsp;1<br />(Hrzánská pasáž)</b></p>
			<iframe
				title="google map snippet"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.954020824325!2d14.420752876650914!3d50.0871477134557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95a56647b109%3A0x5a442ed228ff84fc!2sSL%C3%81VA*21%20fashion%20concept%20store%20%26%20creative%20hub!5e0!3m2!1scs!2scz!4v1727036196134!5m2!1scs!2scz"
				width="600"
				height="450"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</div>

<style>
	.clip-path-svg {
		position: absolute;
		z-index: 1;
	}

	.landing {
		height: 100vh;

		display: flex;
		align-items: center;

		background-position: center;
		background-size: cover;
		background-repeat: none;
		background-image: url('/_placeholders/5.jpg');

		clip-path: url(#clip-path);
	}

	.landing .text-wrapper {
		width: 100%;
	}

	.landing .text-wrapper h1 {
		font-size: var(--fs-72);
	}

	.landing .text-wrapper p{
		text-transform: uppercase;
		font-size: var(--fs-32);
	}

	.landing .text-wrapper h1,
	p {
		width: 100%;
		text-align: center;
	}

	.contact {
		padding: var(--py) var(--px);
	}

	.contact h1 {
		text-align: center;
	}

	.contact .wrapper {
		height: 100%;

		display: flex;
	}

	.contact .wrapper .list,
	.loc {
		position: relative;
		width: 50%;

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: start;
	}

	.contact .wrapper .list,
	.loc {
		text-align: center;
	}
</style>

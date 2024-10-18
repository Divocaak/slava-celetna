<script>
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Navbar from '$lib//Navbar.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';

	/* TODO delete static/reference/ */
</script>

<!-- https://yqnn.github.io/svg-path-editor/
https://yoksel.github.io/relative-clip-path/ -->
<svg class="clip-path-svg" width="0" height="0">
	<clipPath id="clip-path" clipPathUnits="objectBoundingBox">
		<path
			d="m0,0
            s0.465,0,0.465,0
            c0.016,0.2,0.16,0.18,0.353,0.24
            c0.321,0.1,0.136,0.25,0.056,0.26
            c-0.168,0.1,-0.377,0.1,-0.072,0.31
            c0.104,0.08,0.088,0.16,-0.802,0.19"
		></path>
	</clipPath>
</svg>

<Navbar />
<div class="landing">
	<div class="text-wrapper">
		<h1>sláva!</h1>
		<p>where fashion meets people</p>
	</div>
</div>

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
	imgsLeft={true}
/>
<div class="contact">
	<h2>contact</h2>
	<div class="wrapper">
		<div class="list">
			<div class="person">
				<p>Teraza Váchová</p>
				<ButtonLink
					href="mailto:tereza@skinonthemarket.cz"
					label="tereza@skinonthemarket.cz"
					uppercase={false}
				/>
				<ButtonLink
					href="tel:+420731469377"
					label="+420&nbsp;731&nbsp;469&nbsp;377"
					uppercase={false}
				/>
			</div>
			<div class="person">
				<p>Jarmila Kytlicová</p>
				<ButtonLink
					href="mailto:jarmila@skinonthemarket.cz"
					label="jarmila@skinonthemarket.cz"
					uppercase={false}
				/>
				<ButtonLink
					href="tel:+420111222333"
					label="+420&nbsp;111&nbsp;222&nbsp;333"
					uppercase={false}
				/>
			</div>
			<div class="person">
				<p>Markéta Košařová</p>
				<ButtonLink
					href="mailto:marketa@skinonthemarket.cz"
					label="marketa@skinonthemarket.cz"
					uppercase={false}
				/>
				<ButtonLink
					href="tel:+420444555666"
					label="+420&nbsp;444&nbsp;555&nbsp;666"
					uppercase={false}
				/>
			</div>
		</div>
		<div class="loc">
			<b>Celetná&nbsp;12, Praha&nbsp;1<br />(Hrzánská pasáž)</b>
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

	.landing .text-wrapper h1,
	p {
		width: 100%;
		text-align: center;
	}

	.contact {
		height: calc(100vh - 2 * var(--py));

		padding: var(--py) var(--px);
	}

	.contact h2 {
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

	.contact .wrapper .list .person {
		display: flex;
		flex-direction: column;
	}

	.contact .wrapper .list p {
		text-align: start;
	}
</style>

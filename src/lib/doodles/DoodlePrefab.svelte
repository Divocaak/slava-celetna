<script>
	export let defaultSvg;
	export let positionSvg;
	export let w;
	export let h;
	export let top = 'auto';
	export let bottom = 'auto';
	export let left = 'auto';
	export let right = 'auto';
</script>

<svg
	width={w}
	height={h}
	viewBox="0 0 {w} {h}"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	style="--defaultSvg: '{defaultSvg}'; --positionSvg: '{positionSvg}'; --top: {top}; --bottom: {bottom}; --left: {left}; --right: {right};"
>
	<path d={defaultSvg} />
</svg>

<style>
	:root {
		--defaultSvg: '';
		--positionSvg: '';
		--top: auto;
		--bottom: auto;
		--left: auto;
		--right: auto;
	}

	@keyframes interpolatePath {
		0% {
			d: path(var(--defaultSvg));
		}

		100% {
			d: path(var(--positionSvg));
		}
	}

	svg {
		position: absolute;
		display: block;
		box-sizing: border-box;

		top: var(--top);
		bottom: var(--bottom);
		left: var(--left);
		right: var(--right);
	}

	svg path {
		stroke: var(--white);
		stroke-width: 20;

		animation-name: interpolatePath;
		animation-duration: 5s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-fill-mode: forwards;
		animation-timing-function: ease-in-out;
	}
</style>

<script>
	export let href;
	export let label;
	export let uppercase = true;
	export let target = "_self";
</script>

<a {href} {target} class="amiamie-black" class:uppercase={uppercase}><slot></slot>{label}</a>

<style>
	a {
		position: relative;
		width: max-content;
		
		padding: 0 5px;
		
		color: var(--white);
		text-decoration: none;
	}
	
	.uppercase{
		text-transform: uppercase;
	}

	a::before {
		position: absolute;
		left: 0;
		bottom: 0;

		content: '';
		background-color: var(--pink);

		width: 0;
		height: 8px;

		z-index: -1;
		transition: all 0.3s ease-in-out;
		opacity: 1;
	}

	a:hover::before {
		width: 100%;
	}
</style>

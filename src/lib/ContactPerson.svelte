<script>
    export let name;
    export let mail;
    export let tel;
    export let telLabel;
</script>

<div class="amiamie">
    <p>{name}</p>
    <a href="mailto:{mail}">{mail}</a>
    <a href="tel:{tel}">{telLabel}</a>
</div>

<style>
    div {
		display: flex;
		flex-direction: column;
        text-align: start;
	}

    p{
        margin: 0;
    }

	a {
        position: relative;
        width: min-content;
        padding: 0 5px;
		
        color: var(--white);
		text-decoration: none;

        font-weight: 300;
		font-size: var(--fs-24);
		line-height: 44px;
		letter-spacing: -0.04em;
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

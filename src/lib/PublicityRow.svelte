<script>
	export let entry;
</script>

<p class="quote">{entry.text}</p>
<p class="author">&mdash; {entry.author}, {entry.year}</p>

<style>
	.quote::before {
		content: open-quote;
	}
	.quote::after {
		content: close-quote;
	}
	.quote {
		quotes: '“' '”' '‘' '’' '“' '”' '‘' '’' '“' '”';
		text-indent: -0.45em;
	}

	@supports (hanging-punctuation: first) {
		.quote {
			text-indent: 0;
			hanging-punctuation: first;
		}
	}

	.author {
		font-style: italic;
        padding-bottom: 45px;
        width: 100%;
        text-align: end;
	}
</style>

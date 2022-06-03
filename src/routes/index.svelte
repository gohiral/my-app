<script>
	export let articles;
</script>

<h1>👋 Hello!</h1>
{#each articles as article}
	<p>Go to <a href={article.url}>{article.title}</a></p>
{/each}

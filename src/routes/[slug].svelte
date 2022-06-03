<script context="module">
  export async function load({ params }) {
    const article = await import(`../_data/${params.slug}.json`)

    return {
      props: {
        article,
      },
    }
  }
</script>

<script>
  export let article
</script>

<h1>{article.title}</h1>
<p>{article.content}</p>

<a href="/">Home</a>

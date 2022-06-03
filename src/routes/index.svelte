<script context="module">
  export async function load() {
    const articleFiles = import.meta.globEager('../_data/*.json')

    const articles = Object.keys(articleFiles).map(key => {
      return {
        // create slug from path: ../_data/slug.json
        slug: key.slice(9, -5),
        content: articleFiles[key].default,
      }
    })

    console.log(articles)

    return {
      props: {
        articles,
      },
    }
  }
</script>

<script>
  export let articles
</script>

<h1>👋 Hello!</h1>
{#each articles as article}
  <p>👉 <a href={article.slug}>{article.content.title}</a></p>
{/each}

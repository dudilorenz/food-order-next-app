

export default async function BlogPostPage({params}) {
    console.log(params.slug);
  return (
    <main>
        <div>{params.slug}</div>
    </main>
  )
}

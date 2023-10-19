import Layout from "../components/layout"
import Post from "../components/post"
import styles from "../styles/grid.module.css"

export default function Blog({posts}) {

  return (
    <Layout
        title = {"Blog"}
        description = "Music blog, guitar sales, advice, GuitarLa"
    >
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts?.map(post => (
            <Post 
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const resp = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await resp.json()

  return {
    props: {
      posts
    }
  }
}

import Layout from "../components/layout"
import Guitar from "../components/guitar"
import styles from "../styles/grid.module.css"
import Post from "../components/post"

export default function Home({guitarras,posts}) {

  return (
    <>
      <Layout
        title={'Home'}
        description={'Music blog, guitar sales and more'}
      >
        <main className="contenedor">
          <h1 className="heading">Our Collection</h1>

          <div className={styles.grid}>
            {guitarras.map(guitar => (
              <Guitar 
                key={guitar.id}
                guitar={guitar.attributes}
              />
            ))}
          </div>
        </main>

        <section className="contenedor">
              <h2 className="heading">Blog</h2>

              <div className={styles.grid}>
                {posts?.map(post => (
                  <Post 
                    key={post.id}
                    post={post.attributes}
                  />
                ))}
              </div>
        </section>
        

      </Layout>

    </>
  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`

  const[resGuitarras, resPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts)
  ])

  const [{ data: guitarras}, {data: posts}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json()
  ])

  return {
      props: {
          guitarras,
          posts
      }
  }
}
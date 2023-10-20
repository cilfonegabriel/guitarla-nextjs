import Layout from "../components/layout"
import Guitar from "../components/guitar"
import styles from "../styles/grid.module.css"

export default function Store({guitars}) {


  return (
    <Layout
        title = {"Virtual Store"}
        description = "Virtual store, sale of guitars, instruments, GuitarLa"
    >
      <main className="contenedor">
        <h1 className="heading">Our Collection</h1>

        <div className={styles.grid}>
          {guitars.map(guitar => (
            <Guitar 
              key={guitar.id}
              guitar={guitar.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

//export async function getStaticProps() {
//  const resp = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//  const {data: guitars} = await resp.json()

//  return {
//    props: {
//      guitars
//    }
//  }
//}

 export async function getServerSideProps() {
   const resp = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
   const {data: guitars} = await resp.json()

   return {
     props: {
       guitars
     }
   }
 }
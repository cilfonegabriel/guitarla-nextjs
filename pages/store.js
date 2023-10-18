import Layout from "../components/layout"
import GuitarList from "../components/guitar-list"

function Store() {
  return (
    <Layout
        title = {"Virtual Store"}
        description = "Virtual store, sale of guitars, instruments, GuitarLa"
    >
      <main className="contenedor">
        <h1 className="heading">Our Collection</h1>

        <GuitarList 
        
        />
      </main>
    </Layout>
  )
}

export default Store

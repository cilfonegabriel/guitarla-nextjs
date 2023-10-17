import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/us.module.css"

function Us() {
  return (
    <Layout
        title = {"Us"}
        description = "About Us, guitaarLa, music store"
    >
      <main className="contenedor">
        <h2 className="heading">Us</h2>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Image about us" />
          <div>

            <p>
              Aliquam varius ornare quam. Nunc porta eget orci non fringilla. Integer semper ante ut ante consequat rhoncus. 
              Pellentesque sed odio semper, ullamcorper ipsum at, rhoncus arcu. Proin vel dui odio. Cras consequat vel lorem sed convallis. 
              Etiam imperdiet imperdiet sapien ac porta. Nulla elit felis, porta et est non, interdum commodo nisl. Maecenas tempor molestie lacinia. 
  
            </p>

            <p>
              Aenean rutrum molestie lacinia. Donec orci ex, tincidunt nec lacinia at, efficitur eu leo. Curabitur interdum, massa sed blandit mattis, nibh arcu lobortis diam, 
              sed tincidunt nisl eros et augue. Integer et dolor at risus congue vestibulum. Nam efficitur ut ante in semper. Pellentesque finibus porta felis, vitae molestie tellus auctor at. 
            </p>
           
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Us

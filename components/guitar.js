import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"

export default function Guitar({guitar}) {

  const { description, imagen, name, price, url } = guitar

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Guitar image ${name}`} />

      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>
        <Link className={styles.enlace} href={`/guitars/${url}`}>
            See Product
        </Link>
      </div>
    </div>
  )
}

import Link from "next/link"
import styles from "../styles/footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
                <Link href="/" >
                    Inicio
                </Link>

                <Link href="/us">
                    Us
                </Link>

                <Link href="/blog" >
                    Blog
                </Link>

                <Link href="/store" >
                    Store
                </Link>
            </nav>

            <p className={styles.copyright}>All rights reserved {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer

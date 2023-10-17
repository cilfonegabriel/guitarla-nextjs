import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/header.module.css"

function Header() {
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Image src="/img/logo.svg" width={300} height={40} alt="imagen logotipo" />

            <nav className={styles.navegacion}>
                <Link href="/">
                    
                    Inicio
                </Link>

                <Link href="/us">
                    Us
                </Link>

                <Link href="/blog">
                    Blog
                </Link>

                <Link href="/store">
                    Store
                </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header

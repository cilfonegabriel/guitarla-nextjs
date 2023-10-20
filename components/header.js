import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "../styles/header.module.css"

function Header() {

    const router = useRouter()
    
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={"/"}>
                    <Image src="/img/logo.svg" width={300} height={40} alt="imagen logotipo" />
                </Link>

                <nav className={styles.navegacion}>
                    <Link href="/" className={router.pathname === '/' ? styles.active : ''} >
                        Inicio
                    </Link>

                    <Link href="/us" className={router.pathname === '/us' ? styles.active : ''}>
                        Us
                    </Link>

                    <Link href="/blog" className={router.pathname === '/blog' ? styles.active : ''}>
                        Blog
                    </Link>

                    <Link href="/store" className={router.pathname === '/store' ? styles.active : ''}>
                        Store
                    </Link>

                    <Link href="/cart">
                        <Image width={30} height={25} src="/img/carrito.png" alt='imagen in header'/>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header

import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header>
        <div className='contenedor'>
            <Image src="/img/logo.svg" width={300} height={40} alt="imagen logotipo" />

            <nav>
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

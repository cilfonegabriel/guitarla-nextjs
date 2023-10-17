import Link from "next/link"

function Footer() {
  return (
    <footer>
        <div className='contenedor'>
            <nav className="navegacion">
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

            <p>All rights reserved {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer

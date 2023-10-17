import Image from "next/future/image"
import logo from "../public/img/logo.svg"

function Header() {
  return (
    <header>
        <div className='contenedor'>
            <Image src={logo.src} width={300} height={40} alt="imagen logotipo" />
        </div>
    </header>
  )
}

export default Header

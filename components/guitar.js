import Image from "next/image"
import Link from "next/link"

export default function Guitar({guitar}) {

  const { description, imagen, name, price, url } = guitar

  return (
    <div>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Guitar image ${name}`} />

      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <Link legacyBehavior href={`/guitars/${url}`}>
          <a>
            See Product
          </a>
        </Link>
      </div>
    </div>
  )
}


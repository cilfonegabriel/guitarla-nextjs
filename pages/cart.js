import Layout from "../components/layout"
import styles from "../styles/cart.module.css"
import Image from "next/image"

function Cart({carrito}) {
  return (
    <Layout title="Shopping cart">
        <main className="contenedor">
            <h1 className="heading">
                Cart
            </h1>

            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Article</h2>
                

                    {carrito.length === 0 ? 'Empty cart' : (
                        carrito.map(product => (
                            <div key={product.id} className={styles.producto}>
                                <div>
                                    <Image width={250} height={480} src={product.imagen} alt={product.name}  />
                                </div>

                                <div>
                                    <p className={styles.name}>{product.name}</p>
                                    <p className={styles.price}>$<span>{product.price}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $<span>{product.amount * product.price}</span></p>
                                </div>
                            </div>
                        ))

                    )}
                </div>

                <aside className={styles.resumen}>
                    <h3>Order Summary</h3>
                    <p>Total to pay: </p>
                </aside>
                
            </div>
        </main>
    </Layout>
  )
}

export default Cart

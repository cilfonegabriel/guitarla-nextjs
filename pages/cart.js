import Layout from "../components/layout"
import styles from "../styles/cart.module.css"
import Image from "next/image"

function Cart({carrito, actualizarCantidad}) {
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
                                    <p className={styles.nombre}>{product.name}</p>
                                    <div className={styles.cantidad}>
                                        <p>Amount:</p>
                                        <select
                                            className={styles.select}
                                            onChange={ e => actualizarCantidad({
                                                id: product.id,
                                                amount: e.target.value
                                            })}
                                            value={product.amount}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
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

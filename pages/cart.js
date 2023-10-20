import Layout from "../components/layout"
import styles from "../styles/cart.module.css"

function Cart() {
  return (
    <Layout title="Shopping cart">
        <main>
            <h1 className="heading">
                Cart
            </h1>

            <div>
                <div>
                    <h2>Article</h2>
                </div>

                <aside>
                    <h3>Order Summary</h3>
                    <p>Total to pay: </p>
                </aside>
                
            </div>
        </main>
    </Layout>
  )
}

export default Cart

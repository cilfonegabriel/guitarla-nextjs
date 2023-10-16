import Link from "next/link"
import Layout from "../components/layout"

function Us() {
  return (
    <Layout
        title = {"Us"}
        description = "About Us, guitaarLa, music store"
    >
      <Link href="/">Go to Home</Link>
    </Layout>
  )
}

export default Us

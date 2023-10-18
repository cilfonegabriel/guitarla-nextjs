import Layout from "../components/layout"
import Link from "next/link"

function Page404() {
  return (
    <Layout
        title="Page not found"
    >
    
      <p className="error">Page not found</p>
      <Link href='/' className="error-enlace">
        Go to Home
      </Link>
    </Layout>
  )
}

export default Page404

import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
  return (
    <>
      <Layout>
        <h1>next</h1>
        <Link href="/us">Us</Link>
      </Layout>

    </>
  )
}

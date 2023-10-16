import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
  return (
    <>
      <Layout
        title={'Home'}
        description={'Music blog, guitar sales and more'}
      >
        <h1>next</h1>
        <Link href="/us">Us</Link>
      </Layout>

    </>
  )
}

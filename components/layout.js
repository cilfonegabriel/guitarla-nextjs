import Head from "next/head"

function Layout({ children, title = '', description = ''}) {
  return (
    <>
        <Head>
            <title>{`GuitarLa - ${title}`}</title>
            <meta name="description" content={description} />
        </Head>
        <h1>Layout</h1>
        {children}
    </>
  )
}

export default Layout

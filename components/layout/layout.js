import Head from "next/head";
import Header from "./header";


const Layout = ({children}) => {
    return(
        <>
            <Head>
                <meta name="referer" content="https://phimmoichill.net/" />
            </Head>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main style={{minHeight: 'calc(100vh - 726px)'}}>{children}</main>
            </div>
        </>
    )
}

export default Layout;
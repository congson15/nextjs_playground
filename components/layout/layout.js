import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const Layout = ({children}) => {
    return(
        <>
            <Header />
            <div className="flex flex-col min-h-screen">
                <main style={{minHeight: 'calc(100vh - 726px)'}}>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;
import Header from "./header";


const Layout = ({children}) => {
    return(
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main style={{minHeight: 'calc(100vh - 726px)'}}>{children}</main>
            </div>
        </>
    )
}

export default Layout;
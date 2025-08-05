import { Outlet } from 'react-router-dom'
import Header from "../components/Header"
import Context from '../contexts/context'
import Footer from '../components/Footer'
import ScrollToTop from "../components/ScrollToTop"



const Layout = () => {
return (
    <Context>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
    </Context> 
)
}

export default Layout

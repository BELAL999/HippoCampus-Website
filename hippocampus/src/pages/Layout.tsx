import { Outlet } from 'react-router-dom'
import Header from "../components/Header"
import Context from '../contexts/context'
import Footer from '../components/Footer'



const Layout = () => {
return (
    <Context>
        <Header />
        <Outlet />
        <Footer />
    </Context> 
)
}

export default Layout

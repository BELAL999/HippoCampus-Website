import { Outlet } from 'react-router-dom'
import Header from "../components/Header"
import Context from '../contexts/context'


const Layout = () => {
return (
    <Context>
        <Header />
        <Outlet />
    </Context> 
)
}

export default Layout

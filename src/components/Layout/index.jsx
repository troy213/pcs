import { Outlet } from 'react-router-dom'
import { Navbar } from '..'

const Layout = () => {
  return (
    <div className='layout'>
      <Outlet />
      <Navbar />
    </div>
  )
}

export default Layout

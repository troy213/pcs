import { Link } from 'react-router-dom'
import {
  HomeIcon,
  AttendanceIcon,
  CheckOutIcon,
  FormIcon,
  SettingIcon,
} from '../../assets/icons'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='flex flex-space-evenly'>
        <li className='navbar__item flex-column flex-align-center'>
          <HomeIcon />
          <Link to='/' className='text-3'>
            Home
          </Link>
        </li>
        <li className='navbar__item flex-column flex-align-center'>
          <AttendanceIcon />
          <Link to='/' className='text-3'>
            Attendance
          </Link>
        </li>
        <li className='navbar__item flex-column flex-align-center'>
          <CheckOutIcon />
          <Link to='/' className='text-3'>
            Check Out
          </Link>
        </li>
        <li className='navbar__item flex-column flex-align-center'>
          <FormIcon />
          <Link to='/' className='text-3'>
            Form
          </Link>
        </li>
        <li className='navbar__item flex-column flex-align-center'>
          <SettingIcon />
          <Link to='/' className='text-3'>
            Setting
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

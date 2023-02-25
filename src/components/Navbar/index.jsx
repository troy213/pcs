import { Link } from 'react-router-dom'
import useActivity from '../../hooks/useActivity'
import {
  HomeIcon,
  AttendanceIcon,
  CheckOutIcon,
  FormIcon,
  SettingIcon,
} from '../../assets/icons'

const Navbar = () => {
  const { setIsRunning, setCheckOutTime } = useActivity()

  const handleCheckOut = () => {
    setIsRunning(false)
    setCheckOutTime(new Date().toISOString())
  }

  return (
    <nav className='navbar'>
      <ul className='flex flex-space-evenly flex-align-end'>
        <li className='navbar__item active'>
          <Link to='/' className='flex-column flex-align-center text-3'>
            <HomeIcon className='navbar__icon' />
            <p>Home</p>
          </Link>
        </li>
        <li className='navbar__item'>
          <Link to='/' className='flex-column flex-align-center text-3'>
            <AttendanceIcon className='navbar__icon' />
            <p>Attendance</p>
          </Link>
        </li>
        <li className='navbar__item'>
          <button
            className='flex-column flex-align-center text-3'
            onClick={handleCheckOut}
          >
            <div className='navbar__main-icon-wrapper flex-justify-center flex-align-center'>
              <CheckOutIcon className='navbar__icon' />
            </div>
            <p className='mt-2 text-bold text-color-primary'>Check Out</p>
          </button>
        </li>
        <li className='navbar__item'>
          <Link to='/' className='flex-column flex-align-center text-3'>
            <FormIcon className='navbar__icon' />
            <p>Form</p>
          </Link>
        </li>
        <li className='navbar__item'>
          <Link to='/' className='flex-column flex-align-center text-3'>
            <SettingIcon className='navbar__icon' />
            <p>Setting</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

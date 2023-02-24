import { Link } from 'react-router-dom'
import ProfileWidget from './ProfileWidget'
import AcitivityWidget from './ActivityWidget'
import NewsWidget from './NewsWidget'
import UsersWidget from './UsersWdiget'
import { Navbar } from '../../components'
import { NotificationsIcon } from '../../assets/icons'

const Home = () => {
  return (
    <main className='home flex-column gap-4'>
      <div className='home__header flex-space-between'>
        <a href='/' className='text-baloo-bold text-color-primary text-6'>
          KerjaYuk!
        </a>
        <Link to='/notifications'>
          <NotificationsIcon />
        </Link>
      </div>

      <div className='home__profile'>
        <p>Hi, Good Morning!</p>
        <ProfileWidget />
      </div>

      <div className='home__activity'>
        <p className='text-bold'>Today's activity</p>
        <AcitivityWidget />
      </div>

      <div className='home__news'>
        <p className='text-bold'>PCS News</p>
        <NewsWidget />
      </div>

      <div className='home__users'>
        <p className='text-bold'>Online</p>
        <UsersWidget />
      </div>

      <Navbar />
    </main>
  )
}

export default Home

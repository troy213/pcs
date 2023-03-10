import { Link } from 'react-router-dom'
import ProfileWidget from './ProfileWidget'
import AcitivityWidget from './ActivityWidget'
import NewsWidget from './NewsWidget'
import UsersWidget from './UsersWdiget'
import { NotificationsIcon } from '../../assets/icons'
import { NEWS_DATA, PROFILE_DATA, USERS_DATA } from '../../data/dummyData'

const Home = () => {
  return (
    <main className='home flex-column gap-4'>
      <div className='home__header flex-space-between flex-align-center'>
        <a href='/' className='text-baloo-bold text-color-primary text-6'>
          KerjaYuk!
        </a>
        <Link to='/notifications'>
          <div className='home__notifications-container'>
            <NotificationsIcon className='home__header-icon' />
            <div className='home__notifications-badge'></div>
          </div>
        </Link>
      </div>

      <ProfileWidget data={PROFILE_DATA} />
      <AcitivityWidget />
      <NewsWidget data={NEWS_DATA} />
      <UsersWidget data={USERS_DATA} />
    </main>
  )
}

export default Home

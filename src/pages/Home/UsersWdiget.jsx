import { userImg4, userImg5 } from '../../assets/images'

const UsersWidget = () => {
  return (
    <div className='users-widget flex-column gap-4'>
      <p className='text-bold'>Online</p>
      <div className='users-widget__card flex'>
        <div className='users-widget__user-container flex'>
          <div className='users-widget__user flex-column flex-align-center'>
            <img src={userImg4} alt='user' className='users-widget__image' />
            <p className='text-bold text-3'>Jefril</p>
            <p className='users-widget__location text-light'>Sahid</p>
          </div>
        </div>
        <div className='users-widget__user-more flex flex-align-center text-3'>
          10 more
        </div>
      </div>
    </div>
  )
}

export default UsersWidget

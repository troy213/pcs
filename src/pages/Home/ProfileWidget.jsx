import { userImg1 } from '../../assets/images'

const ProfileWidget = () => {
  return (
    <div className='profile-widget flex-column gap-4'>
      <p>Hi, Good Morning!</p>
      <div className='profile-widget__card flex-column gap-4'>
        <div className='flex-space-between'>
          <div className='flex gap-4'>
            <img
              src={userImg1}
              alt='profile'
              className='profile-widget__image'
            />
            <div className='flex-column'>
              <p className='text-bold'>Tabay</p>
              <p className='text-3'>
                <em>UI/UX Designer</em>
              </p>
            </div>
          </div>
          <div className='flex-column flex-align-end'>
            <p className='text-3'>
              <em>Member since</em>
            </p>
            <p className='text-bold'>01 Juni 2021</p>
          </div>
        </div>
        <div className='flex-space-between flex-align-end'>
          <div className='flex-column'>
            <p className='text-3 text-light'>Location</p>
            <p className='text-bold'>Kantor Sahid</p>
          </div>
          <p className='text-3'>
            <em>ICO</em>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileWidget

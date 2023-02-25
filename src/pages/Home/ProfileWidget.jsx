import { getFullDate } from '../../utils'

const ProfileWidget = (props) => {
  const { data } = props
  const { name, image, position, memberDate, location } = data

  return (
    <div className='profile-widget flex-column gap-4'>
      <p>Hi, Good Morning!</p>
      <div className='profile-widget__card flex-column gap-4'>
        <div className='flex-space-between'>
          <div className='flex gap-4'>
            <img src={image} alt='profile' className='profile-widget__image' />
            <div className='flex-column'>
              <p className='text-bold'>{name}</p>
              <p className='text-3'>
                <em>{position}</em>
              </p>
            </div>
          </div>
          <div className='flex-column flex-align-end'>
            <p className='text-3'>
              <em>Member since</em>
            </p>
            <p className='text-bold'>{getFullDate(memberDate)}</p>
          </div>
        </div>
        <div className='flex-space-between flex-align-end'>
          <div className='flex-column'>
            <p className='text-3 text-light'>Location</p>
            <p className='text-bold'>{location}</p>
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

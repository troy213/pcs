import useScreenWidth from '../../hooks/useScreenWidth'

const User = (props) => {
  const { data } = props
  const { image, name, location } = data

  return (
    <div className='users-widget__user flex-column flex-align-center'>
      <img src={image} alt='user' className='users-widget__image' />
      <p className='text-bold text-3'>{name}</p>
      <p className='users-widget__location text-light'>{location}</p>
    </div>
  )
}

const UsersWidget = (props) => {
  const { data } = props

  const USER_WIDTH_PX = 65
  const { screenWidth } = useScreenWidth()
  const maxRenderedUser = Math.floor(screenWidth / USER_WIDTH_PX)

  return (
    <div className='users-widget flex-column gap-4'>
      <p className='text-bold'>Online</p>
      <div className='users-widget__card flex-justify-center'>
        <div className='users-widget__user-container flex'>
          {data.slice(0, maxRenderedUser).map((user, index) => (
            <User data={user} key={index} />
          ))}
        </div>
        {data.length > maxRenderedUser ? (
          <div className='users-widget__user-more flex flex-align-center text-3'>
            {data.length - maxRenderedUser} more
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default UsersWidget

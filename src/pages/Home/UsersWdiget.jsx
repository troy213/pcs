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

  return (
    <div className='users-widget flex-column gap-4'>
      <p className='text-bold'>Online</p>
      <div className='users-widget__card flex'>
        <div className='users-widget__user-container flex'>
          {data.map((user, index) => (
            <User data={user} key={index} />
          ))}
        </div>
        <div className='users-widget__user-more flex flex-align-center text-3'>
          10 more
        </div>
      </div>
    </div>
  )
}

export default UsersWidget

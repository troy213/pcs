const UsersWidget = () => {
  return (
    <div className='users-widget flex'>
      <div className='users-widget__user flex-column flex-align-center'>
        <img src='' alt='user' />
        <p className='text-bold'>Jefril</p>
        <p className='text-light text-3'>Sahid</p>
      </div>
      <div className='users-widget__user-more'>10 more</div>
    </div>
  )
}

export default UsersWidget

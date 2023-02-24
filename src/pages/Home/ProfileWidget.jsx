const ProfileWidget = () => {
  return (
    <div className='profile-widget'>
      <div className='flex-space-between'>
        <div className='flex'>
          <img src='' alt='profile' />
          <div className='flex-column'>
            <p className='text-bold'>Tabay</p>
            <p className='text-3'>UI/UX Designer</p>
          </div>
        </div>
        <div className='flex-column'>
          <p className='text-3'>Member since</p>
          <p className='text-bold'>01 Juni 2021</p>
        </div>
      </div>
      <div className='flex-space-between'>
        <div className='flex-column'>
          <p className='text-3'>Location</p>
          <p className='text-bold'>Kantor Sahid</p>
        </div>
        <p className='text-3'>ICO</p>
      </div>
    </div>
  )
}

export default ProfileWidget

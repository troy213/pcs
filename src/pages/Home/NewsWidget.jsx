const NewsWidget = () => {
  return (
    <div className='flex-column'>
      <div className='flex-space-between'>
        <div className='flex'>
          <img src='' alt='author' />
          <p className='text-bold text-color-primary'>Ana Riswati</p>
        </div>
        <div className='flex-column'>
          <p className='text-3'>Senin</p>
          <p className='text-3'>30 Mei 2022</p>
        </div>
      </div>
      <p>
        Kalimat 1 - Lorem ipsum dolor sit amet consec Kalimat 2 - Lorem ipsum
        dolor sit amet consec Kalimat 3 - Lorem ipsum dolor sit amet consec
        Kalimat 4 - Lorem ipsum dolor sit amet consec
      </p>
    </div>
  )
}

export default NewsWidget

import { userImg3 } from '../../assets/images'

const dummyContent = `Kalimat 1 - Lorem ipsum dolor sit amet consec\nKalimat 2 - Lorem ipsum dolor sit amet consec\nKalimat 3 - Lorem ipsum dolor sit amet consec\nKalimat 4 - Lorem ipsum dolor sit amet consec`

const NewsWidget = () => {
  return (
    <div className='news-widget flex-column gap-4'>
      <p className='text-bold'>PCS News</p>
      <div className='news-widget__card flex-column gap-4'>
        <div className='flex-space-between'>
          <div className='flex flex-align-center gap-2'>
            <img src={userImg3} alt='author' className='news-widget__image' />
            <p className='text-bold text-color-primary'>Ana Riswati</p>
          </div>
          <div className='flex-column flex-align-end flex-justify-center'>
            <p className='text-3'>Senin</p>
            <p className='text-3'>30 Mei 2022</p>
          </div>
        </div>
        <p className='news-widget__content'>{dummyContent}</p>
      </div>
    </div>
  )
}

export default NewsWidget

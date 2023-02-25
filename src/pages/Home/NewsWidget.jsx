import Carousel from 'react-material-ui-carousel'
import { getFullDate } from '../../utils'

const News = (props) => {
  const { data } = props
  const { image, author, createdAt, content } = data
  const dayName = new Date(createdAt).toLocaleDateString('id-ID', {
    weekday: 'long',
  })

  return (
    <div className='news-widget__card flex-column gap-4'>
      <div className='flex-space-between'>
        <div className='flex flex-align-center gap-2'>
          <img src={image} alt='author' className='news-widget__image' />
          <p className='text-bold text-color-primary'>{author}</p>
        </div>
        <div className='flex-column flex-align-end flex-justify-center'>
          <p className='text-3'>{dayName}</p>
          <p className='text-3'>{getFullDate(createdAt)}</p>
        </div>
      </div>
      <p className='news-widget__content'>{content}</p>
    </div>
  )
}

const NewsWidget = (props) => {
  const { data } = props

  return (
    <div className='news-widget flex-column gap-4'>
      <p className='text-bold'>PCS News</p>
      <Carousel
        className='news-widget__carousel'
        autoPlay={false}
        animation='slide'
        navButtonsAlwaysInvisible={true}
        activeIndicatorIconButtonProps={{
          className: 'text-color-primary',
        }}
      >
        {data.map((news, index) => (
          <News data={news} key={index} />
        ))}
      </Carousel>
    </div>
  )
}

export default NewsWidget

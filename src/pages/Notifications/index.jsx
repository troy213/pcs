import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CrossIcon,
  CheckIcon,
} from '../../assets/icons'
import { getFormatedDate } from '../../utils'
import { NOTIFICATIONS_DATA } from '../../data/dummyData'

const Notification = (props) => {
  const { data } = props
  const { image, status, title, content, date } = data

  const [isUntouched, setIsUntouched] = useState(data.isUntouched)

  const renderStatus = {
    success: (
      <div className='notifications__status success'>
        <CheckIcon className='notifications__status-icon' />
      </div>
    ),
    failed: (
      <div className='notifications__status failed'>
        <CrossIcon className='notifications__status-icon' />
      </div>
    ),
    processed: (
      <div className='notifications__status processed'>
        <ArrowRightIcon className='notifications__status-icon' />
      </div>
    ),
  }

  const handleClick = () => {
    setIsUntouched(false)
  }

  return (
    <div
      className={`notifications__item flex gap-4${
        isUntouched ? ' untouched' : ''
      }`}
      onClick={handleClick}
    >
      <div className='notifications__image'>
        <img src={image} alt='notification' />
        {renderStatus[status]}
      </div>
      <div className='flex-column'>
        <div className='flex-space-between'>
          <p className='text-bold'>{title}</p>
          <p className='text-color-disabled'>{getFormatedDate(date)}</p>
        </div>
        <p>{content}</p>
      </div>
    </div>
  )
}

const Notifications = () => {
  return (
    <section className='notifications'>
      <div className='notifications__header flex flex-align-center gap-4'>
        <Link to='/' className='flex-align-center'>
          <ArrowLeftIcon />
        </Link>
        <p className='text-bold text-color-primary text-6'>Notification</p>
      </div>
      {NOTIFICATIONS_DATA.map((notification, index) => (
        <Notification data={notification} key={index} />
      ))}
      <div className='flex-column'></div>
    </section>
  )
}

export default Notifications

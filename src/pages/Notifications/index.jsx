import { Link } from 'react-router-dom'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CrossIcon,
  CheckIcon,
} from '../../assets/icons'
import { clockPng, coinsPng, pillPng } from '../../assets/images'

const Notifications = () => {
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

  return (
    <section className='notifications'>
      <div className='notifications__header flex flex-align-center gap-4'>
        <Link to='/' className='flex-align-center'>
          <ArrowLeftIcon />
        </Link>
        <p className='text-bold text-color-primary text-6'>Notification</p>
      </div>

      <div className='flex-column'>
        <div className='notifications__item flex gap-4 untouched'>
          <div className='notifications__image'>
            <img src={clockPng} alt='notification' />
            {renderStatus['success']}
          </div>
          <div className='flex-column'>
            <div className='flex-space-between'>
              <p className='text-bold'>Reimbursement</p>
              <p className='text-color-disabled'>Today</p>
            </div>
            <p>
              Your submission "Lorem ipsum dolor sit amet..." with the" with a
              total cost of 50,000 has been paid, please check your BRIMO
              application, Thankyou
            </p>
          </div>
        </div>
        <div className='notifications__item flex gap-4'>
          <div className='notifications__image'>
            <img src={coinsPng} alt='notification' />
            {renderStatus['processed']}
          </div>
          <div className='flex-column'>
            <div className='flex-space-between'>
              <p className='text-bold'>Reimbursement</p>
              <p className='text-color-disabled'>Today</p>
            </div>
            <p>
              Your submission "Lorem ipsum dolor sit amet..." with the" with a
              total cost of 50,000 has been paid, please check your BRIMO
              application, Thankyou
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notifications

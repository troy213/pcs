import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '../../assets/icons'

const Notifications = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <section className='notifications'>
      <div className='notifications__header flex flex-align-center'>
        <button onClick={handleBack}>
          <ArrowLeftIcon />
        </button>
        <p className='text-bold text-color-primary text-6'>Notification</p>
      </div>

      <div className='flex-column'>
        <div className='flex'>
          <div className='notifications__image'>
            <img src='' alt='notification' />
          </div>
          <div className='flex-column'>
            <p className='text-bold'>Reimbursement</p>
            <p>
              Your submission "Lorem ipsum dolor sit amet..." with the" with a
              total cost of 50,000 has been paid, please check your BRIMO
              application, Thankyou
            </p>
          </div>
          <p className='text-color-disabled'>Today</p>
        </div>
      </div>
    </section>
  )
}

export default Notifications

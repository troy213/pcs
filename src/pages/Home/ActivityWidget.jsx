import { ClockNineIcon, ClockSixIcon, EightLoopIcon } from '../../assets/icons'

const AcitivityWidget = () => {
  return (
    <div className='activity-widget flex-space-evenly'>
      <div className='flex-column flex-align-center'>
        <ClockNineIcon className='text-color-primary' />
        <p className='text-bold'>08:30</p>
        <p className='text-3'>Check In</p>
      </div>
      <div className='flex-column flex-align-center'>
        <EightLoopIcon className='text-color-primary' />
        <p className='text-bold text-color-primary'>03:00:00</p>
        <p className='text-3'>Working Hours</p>
      </div>
      <div className='flex-column flex-align-center'>
        <ClockSixIcon className='text-color-primary' />
        <p className='text-bold'>--:--</p>
        <p className='text-3'>Check Out</p>
      </div>
    </div>
  )
}

export default AcitivityWidget

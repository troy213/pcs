import { ClockNineIcon, ClockSixIcon, EightLoopIcon } from '../../assets/icons'
import useActivity from '../../hooks/useActivity'
import { getCheckInAndOutTime, getWorkingTime } from '../../utils'

const AcitivityWidget = () => {
  const { checkInTime, workingTime, checkOutTime } = useActivity()

  return (
    <div className='activity-widget flex-column gap-4'>
      <p className='text-bold'>Today's activity</p>
      <div className='activity-widget__card flex-space-between'>
        <div className='flex-column flex-align-center'>
          <ClockNineIcon className='activity-widget__icon text-color-primary' />
          <p className='text-bold mt-2'>{getCheckInAndOutTime(checkInTime)}</p>
          <p className='text-3'>Check In</p>
        </div>
        <div className='flex-column flex-align-center'>
          <EightLoopIcon className='activity-widget__icon--custom-size text-color-primary' />
          <p className='text-bold text-color-primary text-5 mt-2'>
            {getWorkingTime(workingTime)}
          </p>
          <p className='text-3'>Working Hours</p>
        </div>
        <div className='flex-column flex-align-center'>
          <ClockSixIcon className='activity-widget__icon text-color-primary' />
          <p className='text-bold mt-2'>
            {checkOutTime ? getCheckInAndOutTime(checkOutTime) : '--:--'}
          </p>
          <p className='text-3'>Check Out</p>
        </div>
      </div>
    </div>
  )
}

export default AcitivityWidget

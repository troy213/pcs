import { createContext, useState, useEffect, useRef } from 'react'

const ActivityContext = createContext()

export const ActivityProvider = ({ children }) => {
  const intervalRef = useRef(null)
  const [checkInTime, setCheckInTime] = useState(null)
  const [workingTime, setWorkingTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)
  const [checkOutTime, setCheckOutTime] = useState(null)

  useEffect(() => {
    let isMounted = true

    if (isMounted) {
      setCheckInTime(new Date().toISOString())
    }

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setWorkingTime((prevWorkingTime) => prevWorkingTime + 1)
      }, 1000)
    }

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [isRunning])

  return (
    <ActivityContext.Provider
      value={{
        checkInTime,
        workingTime,
        setIsRunning,
        checkOutTime,
        setCheckOutTime,
      }}
    >
      {children}
    </ActivityContext.Provider>
  )
}

export default ActivityContext

import { MONTHS } from '../data/constants'

const getFullDate = (isoStr) => {
  const date = new Date(isoStr)

  const dateNum = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const month = MONTHS[date.getMonth()]
  const year = date.getFullYear()

  return `${dateNum} ${month} ${year}`
}

export default getFullDate

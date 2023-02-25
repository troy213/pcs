import {
  clockPng,
  coinsPng,
  pillPng,
  userImg1,
  userImg2,
  userImg3,
  userImg4,
  userImg5,
  userImg6,
  userImg7,
  userImg8,
  userImg9,
  userImg10,
  userImg11,
  userImg12,
} from '../assets/images'

export const PROFILE_DATA = {
  name: 'Tabay',
  image: userImg1,
  position: 'UI/UX Designer',
  memberDate: '2021-05-31T17:00:00.000Z',
  location: 'Kantor Sahid',
}

export const USERS_DATA = [
  {
    image: userImg4,
    name: 'Jefril',
    location: 'Sahid',
  },
  {
    image: userImg5,
    name: 'Zasami',
    location: 'BSD',
  },
  {
    image: userImg6,
    name: 'Sam',
    location: 'Sahid',
  },
  {
    image: userImg7,
    name: 'Aldo',
    location: 'Sahid',
  },
  {
    image: userImg8,
    name: 'Erwin',
    location: 'Sahid',
  },
  {
    image: userImg9,
    name: 'Arye',
    location: 'BSD',
  },
  {
    image: userImg10,
    name: 'Risya',
    location: 'BSD',
  },
]

export const NOTIFICATIONS_DATA = [
  {
    image: coinsPng,
    status: 'success',
    title: 'Reimbursement',
    content:
      'Your submission "Lorem ipsum dolor sit amet..." with the" with a total cost of 50,000 has been paid, please check your BRIMO application, Thankyou',
    date: '2023-02-25T08:36:41.739Z',
    isUntouched: true,
  },
  {
    image: coinsPng,
    status: 'failed',
    title: 'Reimbursement',
    content:
      'Your submission "description" has been rejected, please click for details.',
    date: '2023-02-24T08:36:41.739Z',
    isUntouched: false,
  },
  {
    image: coinsPng,
    status: 'processed',
    title: 'Reimbursement',
    content:
      'Your submission will be processed according to the reimbursement schedule. Please wait',
    date: '2023-02-23T08:36:41.739Z',
    isUntouched: true,
  },
  {
    image: pillPng,
    status: 'success',
    title: 'Sickness',
    content: 'Your submission has been approved by the Superior.',
    date: '2023-02-22T08:36:41.739Z',
    isUntouched: true,
  },
  {
    image: pillPng,
    status: 'failed',
    title: 'Sickness',
    content:
      'Your submission has been rejected, please confirm with your Superior.',
    date: '2023-02-21T08:36:41.739Z',
    isUntouched: false,
  },
  {
    image: pillPng,
    status: 'processed',
    title: 'Sickness',
    content:
      'Your submission is being reviewed to the Superior for the approval process, please wait',
    date: '2023-02-20T08:36:41.739Z',
    isUntouched: false,
  },
  {
    image: clockPng,
    status: 'success',
    title: 'Overtime',
    content: 'Your submission has been approved by the Superior.',
    date: '2023-02-19T08:36:41.739Z',
    isUntouched: true,
  },
  {
    image: clockPng,
    status: 'failed',
    title: 'Overtime',
    content:
      'Your submission has been rejected, please confirm with your Superior',
    date: '2023-02-18T08:36:41.739Z',
    isUntouched: false,
  },
  {
    image: clockPng,
    status: 'processed',
    title: 'Overtime',
    content:
      'Your submission is being reviewed to the Superior for the approval process, please wait',
    date: '2023-02-17T08:36:41.739Z',
    isUntouched: false,
  },
]

import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-6  flex items-center gap-10 px-18 h-[90vh]'>
      <LeftContent/>
      <RightContent user = {props.user}/>
    </div>
  )
}

export default Page1Content
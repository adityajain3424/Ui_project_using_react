import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between bg-black opacity-30'></div>
        <RightCardContent id = {props.id} tag = {props.tag}/>
        
    </div>
    
  )
}

export default RightCard
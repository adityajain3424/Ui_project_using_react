import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between '>
            <h2 className='bg-white rounded-full font-bold text-2xl h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-xl w-[90%] font-bold leading-relaxed text-white mb-14 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet quae sequi hic voluptate aliquid.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-7 px-3 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 px-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
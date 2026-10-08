import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'
const section1 = (props) => {
  return (
    <div className='h-screen'>
     <Navbar/>
     <Page1Content user = {props.user}/>
    </div>
  )
}

export default section1
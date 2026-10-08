import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
const App = () => {
  const user = [
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'satisfied'
    },
    {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'UnderServed'
    },
    {img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'UnderBanked'
    },
    {img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'UnderBanked'
    },
    {img:'https://images.unsplash.com/photo-1574073763042-9dbe6ae03853?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'UnderBanked'
    }
  ]
  return (
    <div>
      <Section1 user = {user}/>
      <Section2/>
    </div>
  )
}

export default App
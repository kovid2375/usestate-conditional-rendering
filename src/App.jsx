import React from 'react'
import Navbar from './components/Navbar.jsx'
import Men from './components/Men.jsx'
import Women from './components/Women.jsx'
import Button from './components/Button.jsx'



const App = () => {

  const user1={
    name:'Kovid',
    age:22,
    gender:'female'
  }
  
  





  return (
    <div>
      <Navbar title='kovid' color='red'   links={['home', 'about', 'contact', 'services']} />
    <Navbar title='aadarsh' color='blue' links={['home', 'about', 'plan', 'courses']} />
    <Navbar title='venky' color='green' links={['home', 'about', 'option', 'buy']} /> 
    {user1.gender == 'male'?<Men/>:<Women/>}

      <Button/>

    </div>
    
  )
}

export default App
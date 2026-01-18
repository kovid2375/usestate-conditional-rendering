import React from 'react'

const Button = () => {
    
    function clickme(){
        
    }




  return (

    
    <div onClick={clickme}>
        <button className='w-30 h-10 bg-amber-400 rounded-xl px-2 py-2 m-3 active:scale-95 text-white'>click me</button>
    </div>
  )
}

export default Button
import React from 'react'

const Navbar = (props) => {
  return (
    <div  style={{backgroundColor:props.color}} className=' mt-2 bg-pink-700 flex items-center justify-between text-xl text-white'>
        <h2>{props.title}</h2>
        <div className='flex  gap-10'>
            {props.links.map(function(elem){
                return <h4>{elem}</h4>
            })}
            
        </div>
    </div>
  )
}

export default Navbar
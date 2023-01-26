import React from 'react'
import '../css/navbar.css'




const NavBar = () => {

  const menuHandler=()=>{
      
    document.querySelector('.nav-menu').classList.toggle('active')
  
   }

  return (
    <div className='nav-bar'>
      <div className='logo'>
       
       <span>
       <h1>Temp </h1>
       <h2> convert</h2>
       </span>
      
           
       
      </div>
    
      </div>
      
  
  )
}

export default NavBar
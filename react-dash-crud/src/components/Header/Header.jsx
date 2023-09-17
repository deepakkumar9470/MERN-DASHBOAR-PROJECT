import React from 'react'
import './header.scss'
const Header = ({title}) => {
  return (
    <div className='header'>

        <div className="headText">
          <h2>{title}</h2>
        </div>

         <div className='userWrap'>
             <div className='user'>
               <span className='name'>Welcome Deepak Kumar</span> 
               <img src="https://images.pexels.com/photos/18091535/pexels-photo-18091535/free-photo-of-a-woman-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" />
             </div>  

           <div className='bell'>
             <img src="/icons/bell.svg" alt="bell" />
             <span className='count'>1</span>
           </div>

        </div> 
     
    </div>
  )
}

export default Header
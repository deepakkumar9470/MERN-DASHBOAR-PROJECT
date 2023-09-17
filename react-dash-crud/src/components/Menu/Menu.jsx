import React from 'react'
import './menu.scss'
import { Link } from 'react-router-dom'
import { menuItems } from './items'

const Menu = () => {
  return (
    <div className='menu'>
      
      {
        menuItems.map((item)=>(
          <div className="item" key={item.id}>
           <Link to={item.url} className='listItem'>
          <img src={item.icon} alt={item.title} />
          <span className='listItemTitle'>{item.title}</span>
          </Link>
          </div>
        ))
      }
      
    </div>
  )
}

export default Menu
import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
       <div className='tabs'>
        <NavLink to='/' className='tab1'>Add New Person</NavLink>
        <NavLink to='/Retrieve' className='tab2'>Retrieve Information</NavLink>
      </div>
    </div>
  )
}

export default Header
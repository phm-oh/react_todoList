import React from 'react'
import './css/Header.css'

const Header = () => {
  return (
    <header>
        <div className="logo">
           <span> Todo Management</span>
        </div>
        <div className='theme-container'>
          <span>โหมดกลางวัน</span>
          <span className='icon'>สลับ</span>
        </div>


    </header>
  )
}

export default Header
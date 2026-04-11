import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-item-center'>
            <a href="javascript:void(0)" className='logo'>Cric <span>Era</span>.</a>
            <ul className='d-flex'>
                <li><a href="javascript(0)">Home</a></li>
                <li><a href="javascript(0)">About</a></li>
                <li><a href="javascript(0)">Blog</a></li>
                <li><a href="javascript(0)">Contact</a></li>
            </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
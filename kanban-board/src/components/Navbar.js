import React from 'react'
import './Navbar.css'
import UserMenu from './UserMenu'

export default function Navbar() {
  return(
      <div className="navbar">
        Awesome Kanban Board
        <UserMenu/>

      </div>
  )
}
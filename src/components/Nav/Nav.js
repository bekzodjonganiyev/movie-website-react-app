import React from 'react'
import { Link } from 'react-router-dom'

import "./nav.css"

function Nav() {
  return (
    <nav className='nav'>
        <Link to="/" className='logo'>
            <img className='logo__img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkI8t3pOUJnVNyDYuha98NjwJkr12M9KoWQ&usqp=CAU' alt='sitel logo' width="200" height="auto"/>
        </Link>

        <ul className='nav__list'>
            <li className='nav_item'>
                <Link to="/" className='nav__link'>Home</Link>
            </li>
            <li>
                <Link to="/movie" className='nav__link'>Popular</Link>
            </li>
            <li>
                <Link to="/top-rated" className='nav__link'>Top Rated</Link>
            </li>
        </ul>

        <input className='' type="search" placeholder='search...'  />
    </nav>
  )
}

export default Nav
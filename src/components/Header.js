import React from 'react'
// import { styled } from 'styled-components';
import {NavList} from '../styles/HeaderStyle';
import {Link} from 'react-router-dom';




const Header = () => {
  return (
    <div>
        <NavList>
            <ul className='navi'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/search-lists'>Search Lists</Link>
                </li>
            </ul>
        </NavList>
    </div>
    
  )
}

export default Header
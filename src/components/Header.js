import React from 'react'
// import { styled } from 'styled-components';
import mainlogo from '../assets/logo.png';
import menuicon from '../assets/menu-icon.png';
import {NavList} from '../styles/HeaderStyle';
import {Link} from 'react-router-dom';




const Header = () => {
  return (
    <div>
        <NavList>
            <ul className='navi'>
                <li>   
                    <Link to='/'><img className="logo" src={mainlogo} alt=''/></Link>
                </li>
                <li>
                    <a>로그인</a>
                    <a>위시리스트</a>
                    {/* <Link to='/search-lists'>Search Lists</Link> */}
                    <a><img className="menu-icon" src={menuicon} alt=''/></a>
                </li>
            </ul>
        </NavList>
        
    </div>
    
  )
}

export default Header
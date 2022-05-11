import React from 'react'
import Avatar from '../../assets/nikki-profile.JPEG'

import HeaderLinks from './HeaderLinks';
import HeaderSocials from './HeaderSocials';

import './header.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="container max-width max-height">
      <div className="profile-picture">
        <img src={Avatar} alt="avatar" className="avatar" />
      </div>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Nikki Nagar</h1>
        <h5 className="text-light-gray">Fullstack Developer</h5>
        <HeaderSocials/>
        <hr className="hr divider"/>
        <HeaderLinks/>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
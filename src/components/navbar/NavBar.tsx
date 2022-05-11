import React from 'react'

import {BiHomeHeart} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookHeart} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageRoundedDetail} from 'react-icons/bi';
import {HiCode} from 'react-icons/hi';


import './navbar.css'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav>
      <a href="#"><BiHomeHeart/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBookHeart/></a>
      <a href="#portfolio"><HiCode/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default NavBar
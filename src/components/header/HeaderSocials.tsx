import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

type Props = {}

const HeaderSocials = (props: Props) => {
  return (
        <div className="header-socials">
            <a href="http://linkedin.com/in/nikki-n" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="http://github.com/nikkinagar" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="mailto:n.nagar12@gmail.com"><MdEmail/></a>
        </div>
    )
}

export default HeaderSocials;
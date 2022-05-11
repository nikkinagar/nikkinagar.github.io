import React from 'react'
import resume from '../../assets/resume.pdf'
import {FaDownload} from 'react-icons/fa';
import {BiMessageRoundedDetail} from 'react-icons/bi';

type Props = {}

const HeaderLinks = (props: Props) => {
  return (
    <div className="header-links">
        <a href={resume} download="Nikki-Nagar-Resume-2022.pdf" className="btn"><FaDownload/> Resume</a>
        <a href="#contact" className="contact btn"><BiMessageRoundedDetail className='contact-icon'/>Contact Me!</a>
    </div>
    )
}

export default HeaderLinks;
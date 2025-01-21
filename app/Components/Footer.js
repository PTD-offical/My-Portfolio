import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun } from '@fortawesome/free-solid-svg-icons';
import logoHeader from '../../public/logoHeader.png';

function Footer() {
  return (
    <nav className="flex justify-between items-center pb-5">
      <a href="#Home">
        <Image src={logoHeader} alt="Logo" width={130} height={50} className="bg-main rounded-xl" />
      </a>

      <div className="hidden lg:flex space-x-8 font-roboto">
        <a href="#About">About Me</a>
        <a href="#Projects">Projects</a>
        <a href="#Skills">Skills</a>
        <a href="#Contact">Contact Me</a>
      </div>

</nav>
  );
}

export default Footer;
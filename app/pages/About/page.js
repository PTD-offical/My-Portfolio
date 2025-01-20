import React from 'react'
import Image from 'next/image'
import abt from '../../../public/MyPic.png'

const About = () => {
  return (
    <section
    id="About"
    className="relative flex flex-col-reverse lg:flex-row justify-between items-center mt-14">
<Image src={abt} alt='About-Image '></Image>
    </section>
  )
}

export default About

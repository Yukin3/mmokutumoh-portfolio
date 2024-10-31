import React from 'react'
import logo from "../assets/MUlogo.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Hero from './Hero';


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Mmokut Umoh Logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/mmokutu/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ color: 'white' }} />
        </a>
        <a href="https://www.github.com/Yukin3" target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={{ color: 'white' }} />
        </a>
        <a href="mailto:mmokutaumoh@gmail.com">
          <EmailIcon sx={{ color: 'white' }} />
        </a>
        </div>
    </nav>
  )
}

export default Navbar
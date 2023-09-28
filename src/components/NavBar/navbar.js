import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logoK.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import Contact from '../Contact/contact';
import menu from '../../assets/menu.png';


const Navbar = () => {
    const onDownloadClick = () => {
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }
    const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'onClick={onDownloadClick}> Resume</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior: "smooth"});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" ></img>Contact Me</button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link> 
        </div>
    </nav>
  )
}

export default Navbar

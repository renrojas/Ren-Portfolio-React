import React from "react";
import './intro.css';
import bg from '../../assets/headshot.png';
import btnImg from '../../assets/resume.png'
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ren</span> <br />Website Designer</span>
                <Link><button className="btn"> <img src={btnImg} alt="Take a Look at My Resume"/>Take a Look at My Resume</button></Link>
            </div>
            <img src={bg} alt = "headshot" className="bg" />
        </section>
    );
}

export default Intro;
import React from "react";
import './intro.css';
import bg from '../../assets/headshot.png';
import btnImg from '../../assets/resume.png'
import { Link } from "react-scroll";

const Intro = () => {
        // onButtonClick from geeksforgeeks.org
        const onDownloadClick = () => {
            fetch('Ren-Rojas-Resume.pdf').then(response => {
                response.blob().then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'Ren-Rojas-Resume.pdf';
                    alink.click();
                })
            })
        }
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ren</span> <br />Web Developer</span>
                <Link><button onClick={onDownloadClick} className="btn"> <img src={btnImg} alt="Resume" className="btnImg"/>Take a Look at My Resume</button></Link>
            </div>
            <img src={bg} alt = "headshot" className="bg" />
        </section>
    );
}

export default Intro;
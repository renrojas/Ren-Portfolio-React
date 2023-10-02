import React from "react";
import './skills.css';
import WebDesign from '../../assets/website-design.png';

const Skills = () => {
    return (
        <section id= 'skills'>
            <span className="skillTitle">About Me</span>
            <span className="skillDesc">Hi there! My name is Ren Rojas. I am Quechua indigenous that has been part of LGBTQPIA+ organizations and groups since 2009. I received my B.A. in Psychology from the University of Colorado at Boulder. My identities help me navigate and provide safe space and outreach to underrepresented communities. My passion includes solving problems and learning new things as well as radical self-love, empowerment and healing.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="Web" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>I recently had the opportunity to be a full stack developer and learn about website design by creating applications by myself. Growing up, I had some interest in writing code but never took the chance to actually learn it. I now completed a certificate in full stack website development and I am excited where this path will take me. Creating websites and applications has become a new passion of mine and I can't wait to see how much more I learn and grow.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Skills
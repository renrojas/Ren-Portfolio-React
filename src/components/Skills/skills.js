import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id= 'skills'>
            <span className="skillTitle">About Me</span>
            <span className="skillDesc">Hi there! My name is Ren Rojas. I am a Quechua indigenous Peruvian that has been part of LGBTQPIA+ organizations and groups since 2009. I received my B.A. in Psychology from the University of Colorado at Boulder. My identities help me navigate and provide safe space and outreach to underrepresented communities. My passion includes solving problems and learning new things as well as radical self-love, empowerment and healing.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UI" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI Design</h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Web" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p></p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="App" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p></p>
                    </div>
                </div>

            </div>
        </section>
    )
}




export default Skills
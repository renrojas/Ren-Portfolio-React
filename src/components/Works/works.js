import React from "react";
import './works.css';
import PupperPicker from '../../assets/PupperPicker.png';
import StarWars from '../../assets/SWquiz.png';
import PwGenerator from '../../assets/PwGenerator.png';
import NoteTaker from '../../assets/NoteTaker.png';
import QueerSource from '../../assets/QueerSource.png';
import Horiseon from '../../assets/Horiseon.png';


const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <div className="worksImgs">
                <img src={PupperPicker} alt="Pupper" className="worksImg" />
                <img src={StarWars} alt="" className="worksImg" />
                <img src={PwGenerator} alt="" className="worksImg" />
                <img src={NoteTaker} alt="" className="worksImg" />
                <img src={QueerSource} alt="" className="worksImg" />
                <img src={Horiseon} alt="" className="worksImg" />
            </div>
            <button className="workBtn">Take a look at my GitHub</button>
        </section>
    );
}


export default Works
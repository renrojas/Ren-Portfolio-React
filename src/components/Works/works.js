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
                <a className='worksImgContainer' href="https://fourstringfunk.github.io/dog-website/" target="_blank">
                    <img src={PupperPicker} alt="Pupper" className="worksImg" />
                </a>
                <a className='worksImgContainer' href="https://renrojas.github.io/star-wars-quiz/" target="_blank">
                    <img src={StarWars} alt="" className="worksImg" />
                </a>
                <a className='worksImgContainer' href="https://renrojas.github.io/password-generator/" target="_blank">
                    <img src={PwGenerator} alt="" className="worksImg" />
                </a>
                <a className='worksImgContainer' href="https://glacial-sea-23660-045a64e39b85.herokuapp.com/" target="_blank">
                    <img src={NoteTaker} alt="" className="worksImg" />
                </a>
                <a className='worksImgContainer' href="https://obscure-reaches-55046-bf910aba05ce.herokuapp.com/" target="_blank">
                    <img src={QueerSource} alt="" className="worksImg" />
                </a>
                <a className='worksImgContainer' href="https://renrojas.github.io/Horiseon/" target="_blank">
                    <img src={Horiseon} alt="" className="worksImg" />
                </a>
            </div>
            <a href="https://github.com/renrojas?tab=repositories" target="_blank">
                <button className="workBtn">Take a look at my GitHub Repositories</button>
            </a>
        </section>
    );
}


export default Works
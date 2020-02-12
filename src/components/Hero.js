import React from 'react';
// import heroImg from '../assets/cervinia.jpg';
import '../styles/hero.css';
import Navbar from './Navbar';

const Hero = props => {
    const title = props.props.primary.hero_title[0].text;
    const heroImg = props.props.primary.hero_image.url;

    return (
        <div className="heroWrapper">
            <Navbar />
            <p className="title">{title}</p>
            <div className="heroImgContainer">
                <img src={heroImg} alt="Cervinia" />
            </div>
        </div>
    );
};
export default Hero;

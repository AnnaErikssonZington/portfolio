import React from 'react';
import heroImg from '../assets/cervinia.jpg';
import '../styles/hero.css';
import Navbar from './Navbar';

export default function Hero() {
    return (
        <div className="heroWrapper">
            <Navbar />
            <p className="title">
                Hi, I'am Anna. Welcome to my world of professional happiness.
            </p>
            <div className="heroImgContainer">
                <img src={heroImg} alt="Cervinia" />
            </div>
        </div>
    );
}

import React from 'react';
import Hero from './Hero';
import Me from './Me';
import '../styles/home.css';
import Projects from './Projects';

const Home = props => {
    return (
        <div className="container">
            <Hero />
            <Me />
            <Projects props={props.props} />
        </div>
    );
};
export default Home;

import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Me from './Me';
import '../styles/home.css';
import Projects from './Projects';
import Prismic, { Predicates } from 'prismic-javascript';

const Home = () => {
    const [prismicData, setPrismicData] = useState({
        projects: null
    });
    const client = Prismic.client(
        'https://annasportfolio.cdn.prismic.io/api/v2'
    );

    useEffect(() => {
        const fetchPrismicData = async () => {
            try {
                const projects = await client.query(
                    Predicates.at('document.type', 'page')
                );

                setPrismicData({ projects: projects.results });
            } catch (error) {
                console.error(error);
            }
        };

        fetchPrismicData();
    }, []);
    console.log(prismicData);

    return (
        <div className="container">
            <Hero />
            <Me />
            <Projects />
        </div>
    );
};
export default Home;

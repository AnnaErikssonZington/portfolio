import React, { useState, useEffect } from 'react';
import Prismic, { Predicates } from 'prismic-javascript';

import './styles/App.css';

import Layout from './components/Layout';

const apiEndpoint = 'https://annasportfolio.cdn.prismic.io/api/v2';

const App = () => {
    const [prismicData, setPrismicData] = useState({
        data: null
    });
    const client = Prismic.client(apiEndpoint);

    useEffect(() => {
        const fetchPrismicData = async () => {
            try {
                const dataFromPrismic = await client.query(
                    // Predicates.at('my.page.uid', 'projects')
                    Predicates.at('document.type', 'page')
                );
                setPrismicData({ data: dataFromPrismic.results });
            } catch (error) {
                console.error(error);
            }
        };

        fetchPrismicData();
    }, []);

    return <Layout props={prismicData} />;
};

export default App;

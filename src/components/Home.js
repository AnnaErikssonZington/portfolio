import React from 'react';

import { getComponentFromSlice } from '../utility';

import '../styles/home.css';

const Home = props => {
    return (
        <div className="container">
            {props.props &&
                props.props.data.body.map(item => getComponentFromSlice(item))}
        </div>
    );
};
export default Home;

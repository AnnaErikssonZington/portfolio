import React from 'react';
import { getComponentFromSlice } from '../utility';

const About = props => {
    return (
        <div className="container">
            {props.props &&
                props.props.data.body.map(item => getComponentFromSlice(item))}
        </div>
    );
};
export default About;

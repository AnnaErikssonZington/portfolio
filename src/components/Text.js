import React from 'react';
import '../styles/text.css';

const Text = props => {
    const title = props.props.primary.title[0].text;
    const text = props.props.primary.text[0].text;

    return (
        <div className='meWrapper'>
            <h4>{title}</h4>
            <p className='meInfo'>{text}</p>
        </div>
    );
};
export default Text;

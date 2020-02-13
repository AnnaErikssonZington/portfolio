import React from 'react';
import '../styles/textimage.css';

const TextImage = props => {
    const title = props.props.primary.title[0].text;
    const text = props.props.primary.text[0].text;
    const img = props.props.primary.image.url;

    console.log(props);
    return (
        <div>
            <p className="TextImageTitle">{title}</p>
            <div className="TextImageContainer">
                <p className="TextImageText">{text}</p>
                <div className="TextImageImg">
                    <img src={img} alt="jag" />
                </div>
            </div>
        </div>
    );
};
export default TextImage;

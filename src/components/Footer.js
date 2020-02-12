import React from 'react';
import '../styles/footer.css';

const Footer = props => {
    const title = props.props.primary.footer_title[0].text;
    const text = props.props.primary.footer_text[0].text;
    return (
        <div className="footerContainer">
            <h2 className="footerTitle">{title}</h2>
            <p className="footerText">{text}</p>
        </div>
    );
};

export default Footer;

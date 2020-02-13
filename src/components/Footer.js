import React from 'react';
import '../styles/footer.css';
import { Linkedin, Mail } from 'react-feather';

const Footer = props => {
    const title = props.props.primary.footer_title[0].text;
    const text = props.props.primary.footer_text[0].text;
    return (
        <div className="footerContainer">
            <h2 className="footerTitle">{title}</h2>
            <p className="footerText">{text}</p>
            <div className="logos">
                <Linkedin size="30" className="linkedInLogo" />
                <Mail size="30" />
            </div>
        </div>
    );
};

export default Footer;

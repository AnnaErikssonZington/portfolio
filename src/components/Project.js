import React from 'react';
import '../styles/project.css';

const Project = props => {
    const title = props.props.primary.title[0].text;
    const image_position = props.props.primary.image_position;
    const image_url = props.props.primary.image.url;
    let link_url = props.props.primary.url.url;
    const technologies = props.props.primary.technologies[0].text;

    return (
        <React.Fragment>
            <div className={`gridContainer ${image_position} `}>
                <div className="projectTextContainer">
                    <h3 className="projectTitle">{title}</h3>
                    <div className="technologies">
                        <p className="smallText"> {technologies}</p>
                    </div>

                    <a href={link_url} className="projectLink">
                        {link_url}
                    </a>
                </div>
                <div className="projectImageContainer">
                    <img src={image_url} className="projectImage" alt={title} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;

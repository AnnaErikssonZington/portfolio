import React from 'react';
import '../styles/projects.css';

const Projects = props => {
    const Project = props => {
        const title = props.props.title[0].text;
        const text = props.props.rich_content[0].text;
        const image_position = props.props.image_position;
        const image_url = props.props.image.url;

        console.log(image_position);
        return (
            <React.Fragment>
                <div className="gridContainer">
                    <div className="projectTextContainer">
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
                    <div className={`projectImageContainer ${image_position} `}>
                        <img src={image_url} className="projectImage" />
                    </div>
                </div>
            </React.Fragment>
        );
    };

    return (
        <div className="projectWrapper">
            {props.props.data.body.map((item, index) => (
                <Project props={item.primary} key={index} />
            ))}
        </div>
    );
};
export default Projects;

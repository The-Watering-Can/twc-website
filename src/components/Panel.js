import React, { useState } from 'react';
import '../assets/style.css';

import Colors from '../assets/colors';



const ProjectCard = (props) => {
    const [hover, setHover] = useState(false);
    const [opacity, setOpacity] = useState('90%');

    const onHoverChange = (isEnter) => {
        setHover(isEnter);
        isEnter
            ? setOpacity('30%')
            : setOpacity('90%');
    }

    return (
        <div className="my-container column-dir between panel-container" onMouseEnter={() => onHoverChange(true)} onMouseLeave={() => onHoverChange(false)}>
            <div className="panel-title">
                <img src={props.icon} className="panel-icon" />
                <h2>{props.title}</h2>
            </div>
            <div className="my-container center panel-img">
                <div className="panel-img-background" style={{backgroundImage: `url(${props.img})`,  opacity: opacity}}></div>
                {hover
                    ? <div className="panel-description">{props.description}</div>
                    : null
                }
            </div>

        </div>
    );
};

export default ProjectCard;
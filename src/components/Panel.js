import React, { useState } from 'react';
import '../assets/style.css';

import Colors from '../assets/colors';



const ProjectCard = (props) => {
    const [hover, setHover] = useState(false);
    const [opacity, setOpacity] = useState('90%');

    const onHover = () => {
        setHover(!hover);
        hover
            ? setOpacity('90%')
            : setOpacity('30%')
    }

    return (
        <div className="my-container column-dir between panel-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="panel-title">
                <img src={props.icon} className="panel-icon" />
                <h2>{props.title}</h2>
            </div>
            <div className="my-container center panel-img" style={{ backgroundImage: `url(${props.img})`, position: "relative", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity: opacity }}>
                {hover
                    ? <div className="panel-description">{props.description}</div>
                    // </div>
                    : <p></p>
                }
                {/* <img src={props.img} className="full-img panel-img" /> */}
            </div>

        </div>
    );
};

export default ProjectCard;
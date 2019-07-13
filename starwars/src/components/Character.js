import React from 'react';
import './StarWars.css';

const Characters = props => {
    return (
        <div>
            <h3>{props.charInfo.name}</h3>
            
        </div>
    )
}

export default Characters;
import React from 'react';
import './Character.css'

const Character = props => (
    <div className="card" id={props.id}>
        <div className="img">
            <img alt={props.name} src={props.image} onClick={() => props.characterClicked(props.id)} />
        </div>
    </div>
);

export default Character;

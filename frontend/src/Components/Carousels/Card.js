import React from 'react';

import './Card.css'

const Card = ({ name, url }) => {
    return (
        <div className='card'>
            <img alt='products' src={url} style={{ width: '250px', height: 'auto', padding:'0.6cm' }} />
            <div>
                <h2>{name}</h2>
                <p>hi</p>
            </div>
        </div>
    );
}

export default Card;

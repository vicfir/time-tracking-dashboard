import React from 'react'
import { Card } from './card'

export const Cards = () => {
    let data = require('./data/data.json');
    console.log(data);

    let cardsData = data.map((cardData) =>(<Card title={cardData.title} hours={cardData.timeframes.weekly.current} last={cardData.timeframes.weekly.previous}/>));
    return (
        
        <div>
            {cardsData}
        </div>
    )
}

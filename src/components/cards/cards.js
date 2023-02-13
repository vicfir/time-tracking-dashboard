import React from 'react'
import { Card } from './card'

export const Cards = (props) => {

    let data = require('./public/data/data.json');

    let cardsData = data.map((cardData , index) =>(
        <Card 
            key={index} 
            image={cardData.image} 
            title={cardData.title} 
            hours={props.time=="daily" ? cardData.timeframes.daily.current : props.time=="weekly" ? cardData.timeframes.weekly.current : cardData.timeframes.monthly.current} 
            last={props.time=="daily" ? cardData.timeframes.daily.previous : props.time=="weekly" ? cardData.timeframes.weekly.previous : cardData.timeframes.monthly.previous}
        />
    ));
    

    return (
        
        <div>
            {cardsData}        
        </div>
    )
}

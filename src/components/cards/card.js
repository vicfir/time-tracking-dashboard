import React from 'react'

export const Card = (props) => {
  return (
    <div className='card'>
        <div className='cardImg' style={{backgroundColor: props.color}}>
            <img src={props.image} alt="" />
        </div>
        <div className='cardInfo'>
            <h1>{props.title}</h1>
            <h2>{props.hours}hrs</h2>
            <p>Last Week - {props.last}hrs</p>
        </div>
    </div>
  )
}

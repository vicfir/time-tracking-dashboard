import React from 'react'

export const Card = (props) => {
  return (
    <div>
        {/* <img src="./images/icon-work.svg" alt="" /> */}
        <h1>{props.title}</h1>
        <h2>{props.hours}hrs</h2>
        <p>Last Week - {props.last}hrs</p>
    </div>
  )
}

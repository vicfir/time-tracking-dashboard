import React, { useState } from 'react'
import { Cards } from '../cards/cards'
import './public/style/user.scss'

export const User = () => {
    const [time, setTime] = useState("daily");
    function changeTime(e) {
        setTime(
            e.target.textContent.toLowerCase()
        );

    }
    return (
        <div className='user'>
            <div>
                <img src="./images/image-jeremy.png" alt="" />
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
                <div>
                    <button onClick={changeTime}>Daily</button>
                    <button onClick={changeTime}>Weekly</button>
                    <button onClick={changeTime}>Monthly</button>
                </div>
            </div>
            <Cards time={time}/>
        </div>
    )
}

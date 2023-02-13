import React, { useState } from 'react'
import { Cards } from '../cards/cards'
import './public/style/user.scss'

export const User = () => {
    const [time, setTime] = useState("daily");
    function changeTime(e) {
        setTime(
            e.target.textContent.toLowerCase()
        );
        let activeBtn = document.querySelector(".btnActive");
        activeBtn.className="";
        e.target.className="btnActive";
    }
    return (
        <div className='user'>
            <div className='userInfo'>
                <div className='userInfoTxt'>
                    <img src="./images/image-jeremy.png" alt="" />
                    <div>
                        <p>Report for</p>
                        <h1>Jeremy Robson</h1>
                    </div>
                </div>
                <ul className='btnInfo'>
                    <li className='btnActive' onClick={changeTime}>Daily</li>
                    <li onClick={changeTime}>Weekly</li>
                    <li onClick={changeTime}>Monthly</li>
                </ul>
            </div>
            <Cards time={time}/>
        </div>
    )
}

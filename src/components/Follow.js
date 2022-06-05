import React from 'react'
import './Follow.css'
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";
import {IconContext} from "react-icons";

function Follow() {
    return (
        <>
        <IconContext.Provider value = {{color:'#F2C2C2' , size:'100'}}>
        <div className='follow-header' id='followus'>
                <h1>FOLLOW US</h1>
            </div>
        <div className='follow-container'>
            <p>
            Follow us on our social medias. Stay updated on news, behind the scenes and so much more. 
            </p>
<div className='symbols'>
            <div className='follow-item'>
                <a href="https://www.tiktok.com/@momocha.gamlastan"><FaTiktok className='symbol'/></a>
            </div>
            <div className='follow-item'>
                <a href="https://www.facebook.com/momochabubbletea"><FaFacebook className='symbol'/> </a>
            </div>
            <div className='follow-item'>
                <a href="https://instagram.com/momocha.gamlastan"><FaInstagram className='symbol'/></a>
            </div>
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Follow
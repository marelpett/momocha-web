import React from 'react';
import './Location.css';

function Location() {
    return (
        <>
        <div className='location-header' id='location' ><h1>LOCATION</h1></div>
        <div className='location-container'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.592338308901!2d18.0689901161635!3d59.3230639816566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f774608ad4547%3A0xf62f8dffb3ead7bc!2sMo%20Mo%20Cha!5e0!3m2!1ssv!2sse!4v1631351348829!5m2!1ssv!2sse" 
                width="100%" 
                height="500px" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title = "Google Location">
                </iframe>
<div>
            <div className='location-item'>
                <p className='bold'>ADDRESS</p>
                <p className='rectangle'></p>
                <p>Kornhamnstorg 49, 111 27 Stockholm</p>
            </div>

            <div className='location-item'>
                <p className='bold'>CONTACT US</p>
                <p className='rectangle'></p>
                <p>momocha.gamlastan@gmail.com</p>
            </div>

            <div className='location-item'>
                <p className='bold'>OPENING HOURS</p>
                <p className='rectangle'></p>
                <ul className = "open">
                <li>Mon // 12-18</li>
                <li>Tue // 12-18</li>
                <li>Wed // 12-18</li>
                <li>Thu // 12-18</li>
                <li>Fri // 12-19</li>
                <li>Sat // 11-19</li>
                <li>Sun // 11-19</li>
                </ul>
            </div>
            </div>

        </div>

        </>
    )
}

export default Location

import React from 'react'
import './About.css'

function About() {
    return (
        <>
        <div className='about-header' id='about'>
            <h1>WELCOME TO MO MO CHA!</h1>
        </div>
        <div className='about-container'>

            <div className='about-img'>
                <img alt = "store" src='images/store.jpg'/>  
            </div>

            <div className='text'>
                <p> 
                    Bubble Tea has always been close to our hearts and finally we have started our own Bubble Tea café in town. It's like a dream come true.
                    Our goal is to serve the best Bubble Tea in every town we establish ourselves in and we would love to have you following our journey. 
                </p>

                <p>
                    New and exciting drinks will frequently be introduced. So make sure you follow us on our social media and stay updated. 
                </p>
            </div>     
        </div>
        </>
    )
}

export default About

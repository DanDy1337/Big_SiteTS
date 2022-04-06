import React from 'react'
import '../style.css'

const logo = require("../image/logo.png")

function Head() {

    return (
        <div className='Head'>
            <img src={logo} className='logo' />
            <div className='HDiv'>
                <div>
                    <div className='MenDiv'></div>
                    APPROACH
                </div>
                <div className='QE'>
                    <div className='MenDiv1'></div>
                    WORK
                </div>
                <div className='Q1'>
                    <div className='MenDiv2'></div>
                    CONTACT
                </div>
                <div></div>
            </div>
            
        </div>
    )
}

export default Head;
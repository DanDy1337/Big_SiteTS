import React, { useState } from 'react'
const logo = require("../image/logo.png")

function Body(){

    return(
        <div className='Body'>
            <div className='BDiv'>
                <h2>We are </h2>
                <div className='Text'>
                    <span className='NFT'>A</span><span className='FT'>R</span><span className='FT1'>T</span><span className='FT1'>I</span><span className='FT'>S</span><span className='NFT'>T</span>
                    <img src={logo} className="MiniLogo"/>
                </div>
            </div>
        </div>
    )
}

export default Body;
import React, { useEffect } from 'react'

function Front(){

    useEffect(()=>{

        var Front1: any = document.getElementById('Front1')
        var Front2: any = document.getElementById('Front2')

        setTimeout(()=>{

            Front1.style.transform = 'scale(0,1)'
            Front2.style.transform = 'scale(0,1)'

        },1000)
    })

    return(
        <div>
            <div className='Front' id='Front1'></div>
            <div className='Front2' id='Front2' ></div>
        </div>
    )
}

export default Front;
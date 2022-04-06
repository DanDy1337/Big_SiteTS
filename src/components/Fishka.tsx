import React,{ useState, useEffect, MouseEvent} from "react"
const img1 = require("../image/artists-flipped.jpg")
const img2 = require("../image/storytellers-flipped.jpg")
const img3 = require("../image/technologists-flipped.jpg")
var [pos1, pos2, pos1h] = [0, 0, 230]
var renderCount = 0
var startCoordOfMouse: Array<number>

function Fishka(){
    
    const [render, startRender] = useState(0)


    useEffect(()=> {
        var img1: any = document.getElementById('img1')
        var img2: any = document.getElementById('img2')

        const move = (e: any) => {

            if(renderCount == 0){
                renderCount = 1
                startCoordOfMouse  = [e.clientY, e.clientX]
            }

            pos1 =  startCoordOfMouse[0] - e.clientY - 200
            pos1h = startCoordOfMouse[1] - e.clientX + 2300

            pos2 = e.clientY - startCoordOfMouse[0] + 200

            img1.style.transform = 'rotate(' + pos1/14 + 'deg' + ') scale(-1,1) translate(' + pos1h/10 + 'px' + ', 0' + ')'

            img2.style.transform = 'rotate(' + pos2/14 + 'deg' + ') translate(' + '0,' + pos1h/10 + 'px' + ')'

        }

        setTimeout(() => document.addEventListener('mousemove', move), 1000)
        
    })

    return(
        <div className='FishkaD'>
            <div style={{overflow: 'hidden'}}><img id='img1' src={img1} className='ImgFishka2' style={{left: '230px', transform: 'scale(-1,1)', transition:'transform left 0.2s cubic-bezier(0.18, 0.18, 0.89, 0.9) 0s'}}/></div>
            <div style={{overflow: 'hidden'}}><img id='img2' src={img1} className='ImgFishka'  style={{right: '230px', transition:'transform right 0.2s ease-out'}} /></div>
        </div>
    )
}

export default Fishka;
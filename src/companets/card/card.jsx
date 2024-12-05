import React from 'react'
import Photosss from "../img/image1.png"
import "./card.css"
function Card() {
    return (
        <div>
            <div className='card'id='card'>
                <div className="top-left">
                    <h1> Your Name Here</h1>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, quos!</p>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
               <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>Lets's get started</button>
                </div>
                <div className="top-right">
                    <img src={Photosss} alt="" />
                </div>
                <div className="button">
                    <span>click Up</span>
                    <span>Dropbox</span>
                    <span>weqqrrq</span>
                    <span>eqwqwed</span>
                    <span>qwedqwe</span>
                </div>
            </div>
        </div>
    )
}

export default Card;

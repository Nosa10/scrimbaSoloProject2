import React from "react"

export default function ImageBox(props) {
    return (
        <div className="container">
            <img src={props.img} className="imgg"/>
            <div className="imageBox--right">
                <div className="top">
                    <img src="./Images/location.png"/>
                    <h6>{props.h6}</h6>
                    <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google maps</a>
                </div>
                <h2>{props.h2}</h2>
                <h4>{props.h4}</h4>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}
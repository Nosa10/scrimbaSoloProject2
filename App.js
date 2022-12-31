import React from "react"
import Navbar from "./components/Navbar"
import ImageBox from "./components/ImageBox"
import data from "./data"

export default function App() {
    const dataElements = data.map((datum) => {
          return (
            <ImageBox 
                key ={datum.id}
                img = {datum.imageUrl}
                h6 = {datum.location}
                h2 = {datum.title}
                h4 = {datum.date}
                paragraph={datum.description}
                map = {datum.googleMapsUrl}
            />
        )
    })
    return (
        <div>
            <Navbar />
           {dataElements}
        </div>
        
        
    )
}
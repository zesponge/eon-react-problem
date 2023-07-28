import React from 'react'
import "./list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from '../listItem/ListItem'
import { useState } from 'react'

export default function List() {
    const [isMoved1, setIsMoved1] = useState(false);
    const [isMoved2, setIsMoved2] = useState(false);
    const [slideNumber1, setSlideNumber1] = useState(0);
    const [slideNumber2, setSlideNumber2] = useState(0);

    const handleClick = (direct, list) => {
        let distance = document.getElementById("try").getBoundingClientRect().x;
        let dist2 = document.getElementById("2").getBoundingClientRect().x;
        if (list === "first"){
            setIsMoved1(true);
            if(direct === "left" && slideNumber1 > 0){
                setSlideNumber1(slideNumber1 - 1)
                document.getElementById("try").style.transform = `translateX(${180 + distance}px)`
            }
            if (direct === "right") {
                setSlideNumber1(slideNumber1 + 1)
                document.getElementById("try").style.transform = `translateX(${-280 + distance}px)`
            } 
        } else if (list === "second"){
            setIsMoved2(true);
            if(direct === "left" && slideNumber2 > 0){
                setSlideNumber2(slideNumber2 - 1)
                document.getElementById("2").style.transform = `translateX(${180 + dist2}px)`
            }
            if (direct === "right") {
                setSlideNumber2(slideNumber2 + 1)
                document.getElementById("2").style.transform = `translateX(${-280 + dist2}px)`
            } 
        }
    }
  return (
    <div className='list'>
      <span className="listTitle">Continue to Watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left", "first")} style={{display: !isMoved1 && "none"}}/>
        <div className="container" id="try">
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>

        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right", "first")}/>
      </div>
      <span className="listTitle">Action</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left", "second")} style={{display: !isMoved2 && "none"}}/>
        <div className="container" id="2">
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>

        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right", "second")}/>
      </div>
    </div>

    
    
  )
}

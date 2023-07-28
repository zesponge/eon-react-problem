import React from 'react'
import "./featured.scss"
import { InfoOutlined, PlayArrow } from '@mui/icons-material'

export default function Featured() {
  return (
    <div className='featured'>
      <img width="100%" src="https://cdn.wallpapersafari.com/65/12/Ct8wEG.jpg"></img>
      <div className="info">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Stranger-Things-logo.png" alt="" />
        <span className='description'>sample description for featured show or movie</span>
        <div className='buttons'>
            <button className='play'><PlayArrow/><span>play</span></button>
            <button className='more'><InfoOutlined/><span>info</span></button>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function Navbar(props) {
  return (
    <div className="Navbar">
    <span className="one" href="#bottom" >{props.title}</span>
    <input type="text" placeholder={props.place}/>
    <button>{props.one}</button>
    <button>{props.two}</button>
    </div>
  )
}

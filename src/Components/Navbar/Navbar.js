import React, { useEffect, useState } from 'react'
import "./Navbar.css"
function Navbar() {
  const [show, setShow] = useState(false)

const transitionNavBar = () => {
  if(window.scrollY > 100){
    setShow(true)
  }else{
    setShow(false)
  }
}
useEffect(() => {
  window.addEventListener("scroll",transitionNavBar)
  return () => {
    window.removeEventListener("scroll",transitionNavBar)
  }

}, [])
  return (
    <div className={`navbar ${show & "nav-black"}`}>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
    </div>
  )
}

export default Navbar
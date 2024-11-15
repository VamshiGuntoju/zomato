import React, { useState } from 'react'
import './BackgroundImg.css'
import { useNavigate } from 'react-router-dom'
function BackgroundImg() {
const [order, upOrder]=useState('')
const navigate=useNavigate()
function takingOrder(temp){
  upOrder(temp.target.value)
}
function givingOrder(){
  if(order==="biriyani"){
    navigate('/Order')
  }else{
    alert("Order Something")
  }
}
function goingToInvestorRel()
{
    navigate('/InvestorRelations')
}
function goingToGetApp()
{
    navigate('/GetTheApp')
}
function goingToAddRestaurant()
{
    navigate('/AddRestaurant')
}
function goingToLogin()
{
    navigate('/Login')
}
function goingToSignup()
{
    navigate('/Signup')
}
  return (
    <>
      <div className="background-image">
        <div className="nav-bar">
          <p><button onClick={goingToGetApp}>Get App</button></p>
          <ul>
            <li><button onClick={goingToInvestorRel}>Investor Relations</button></li>
            <li><button onClick={goingToAddRestaurant}>Add restaurant</button></li>
            <li><button onClick={goingToLogin}>Log in</button></li>
            <li><button onClick={goingToSignup}>Sign up</button></li>
          </ul>
        </div>
        <img
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          className="zomato-icon"
        />
        <p className='discover-best'>Discover the best food & drinks in&nbsp;<span>Hyderabad</span></p>
        <input type='text' placeholder='Search for restaurant, cuisine or a dish' onChange={takingOrder} />
        <button className='food-search' onClick={givingOrder}>Search</button>
      </div>
    </>
  )
}

export default BackgroundImg

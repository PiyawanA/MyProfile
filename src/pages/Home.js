import React from 'react'
import pic from '../assets/profile.JPG'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home-con'>
      <img src={pic} alt='profile' className='PicHome'/>
      
      <h1> Piyawan Arakkunakorn  <br /> <br />
      I have recently graduated with a bachelor's degree from
      the Faculty of Science, majoring in Computer Science.
      </h1>
    </div>
  )
}

export default Home
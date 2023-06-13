import React from 'react'
import pic from '../assets/profile1.JPG'
import "../styles/AboutMe.css"

function AboutMe() {
  return (
    <div className='aboutme-con'>

      <h1 className='head'>Hello, My name is Piyawan Arakkunakorn </h1>

      <div className='detail'>
        <img src={pic} alt='Profile' className='pic-about'/>
      
          <p> 
            <h2>About Me</h2>
            I am a student at the university. I am studying computer science. 
            I am looking for an internship in front-end programming.  
            I would like to learn programming to gain real-world experience.  
            My goal is to acquire valuable learning experiences and prepare myself for work in society. 
            I hope to apply the experience gained in my future work. <br /><br />

            <h2> Internship </h2>
            <h4>April 2022 - June 2022</h4>
            <h5>National Science and Technology Development Agency</h5>
            <h4>Data Analysis (Data Visualization)</h4>
            I have learned about the Tableau program and made the program guide where the data analyzed was energy data.
            
          </p>
      </div>

      

    </div>
  )
}

export default AboutMe
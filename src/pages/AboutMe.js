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
            I am a student at the university. I am studying computer science. <br />
            I am looking for an internship in front-end programming.  <br />
            I would like to learn programming to gain real-world experience.  <br />
            My goal is to acquire valuable learning experiences and prepare myself for work in society. <br />
            I hope to apply the experience gained in my future work. <br /><br />

            <h2> Internship </h2>
            <h3>National Science and Technology Development Agency</h3>
            <h4>April 2022 - June 2022</h4>
            <ul>
              <li> I have learned about the Tableau program and created learning materials.</li>
              <li>Test data was used for data analysis.  
                  Then, I will explain my thought process and ensure that the mentor understands it.
                  When problems are encountered,I can ask the mentor directly for assistance.</li>
            </ul>
          </p>
      </div>

      

    </div>
  )
}

export default AboutMe
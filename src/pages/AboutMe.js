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
            I have recently graduated with a bachelor's degree from the Faculty of Science,
            majoring in Computer Science at Prince of Songkla University. 
            As a recent graduate with a passion for programming, I am keen to commence a career as a programmer. 
            I am actively seeking an opportunity to apply my knowledge and creativity toward developing innovative software solutions 
            that effectively address real-world challenges. <br /><br />

            <h2> Internship </h2>
            
            <h4>QA Engineer</h4>
            <h5>CPF IT CENTER CO., LTD.</h5>
            <h5>November 2023 - March 2024</h5>
            I have learned the quality assurance process and tested two projects.
            I began by analyzing requirements to create scenarios and then executed tests 
            according to the scenarios by performing both manual and automated testing. 
            For automated testing, I utilized Selenium with Robot Framework and Postman API.
            <br /><br />

            <h4>Data Analysis (Data Visualization)</h4>
            <h5>National Science and Technology Development Agency</h5>
            <h5>April 2022 - June 2022</h5>
            I have learned about the Tableau program and made the program guide where the data analyzed was energy data.
            <br /><br />
            
            <h2> Mini Project </h2>

            <h4>Web programming mini project (2023) </h4>
            <h5>Java spring boot & Vue.js</h5>
            I created a website for posting photos so that visitors can view them. Users with accounts can post photos and leave comments. 
            I developed the back-end using Java Spring Boot and the front-end using Vue.js.
            <br /><br />


            <h4>Database mini project (2022) </h4>
            <h5>PHP</h5>
            I created a pet clinic database by designing an ER diagram and implementing it through programming.
             For the programming aspect, I utilized SQL (phpMyAdmin) for the back-end and PHP for the front-end.
             <br /><br />
      

            <h4>Web programming mini project (2021) </h4>
            <h5>React framework</h5>
            I developed an anime review website and implemented a section in the front-end using the React framework.
          
          </p>
      </div>

      

    </div>
  )
}

export default AboutMe
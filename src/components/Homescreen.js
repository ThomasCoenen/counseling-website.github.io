import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import proj1img from '../images/logo6.png';

export default function Homescreen() {
  const [advice, setAdvice] = useState("")

  const getAdvice = ()=>{
    fetch("https://api.adviceslip.com/advice", {method:"get",})
    .then(res=>res.json()) 
    .then(data => {
        console.log("adviceData:", data.slip.advice)
        setAdvice(data.slip.advice)
    })
    .catch(err =>{
        console.log(err)
    })
  }

  return (
      <>
        <section id="welcome">
            <h2>Transformed Within, LLC</h2>
        </section>

        <section id="welcomeMsg">

          <div id="project-heading">
            <h2>
              Welcome to Transformed Within, LLC! Transformed Within is a telehealth counseling service
              designed for you to courageously address some of life’s toughest struggles while resting
              peacefully knowing you are receiving professional, non-judgmental treatment.
              <br/>
              <br/>
              Each person who seeks counseling has a different story to tell and different stressors to
              address, yet each person shares at least one goal: living a healthier, happier life.
              <br/>
              <br/>
              At Transformed Within, you will walk alongside a licensed counselor who seeks to treat the
              whole person: mind, body, and spirit. You will have the opportunity to receive faith-based,
              Christian counseling, which respects both the gift and tool of your faith.
              <br/>
              <br/>
              Explore the services we have to offer, and may your counseling experience be one you can look
              forward to!
            </h2>
            <h2>
              Hours of operation:
            </h2>
          </div>

        </section>
      </>
  )
}

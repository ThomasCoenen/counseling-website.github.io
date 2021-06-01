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
            <h2>Transformed Within, LLC
            </h2>
        </section>

        <section id="welcomeMsg">

          <div id="project-heading">
            <h2>
              My speciailty is building beautiful and responsive desktop/mobile friendly sites that
              scale well for all devices. I also enjoy scraping websites and analyzing real world data. I'm extremely driven to learn more about
              all aspects of web developement and am constanly learning new skills 
              everyday! Staying busy, solving complex problems, and creating opportunities for others have always been of 
              great interest!
            </h2>
            <h2>
              Hours of operation:
            </h2>
          </div>

        </section>
      </>
  )
}

import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default function Footer() {
    const [advice, setAdvice] = useState("")
    const [question, setQuestion] = useState("")

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

    const getQuestion = ()=>{
        fetch("http://jservice.io/api/random", {method:"get",})
        .then(res=>res.json()) 
        .then(data => {
            console.log("questionData:", data[0])
            // setQuestion()
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <section id="contact">
            <ul id="connect-links">
                <li>Contact</li>
                <li>Email</li>
                <li>Phone Number</li>
            </ul>
        </section>
    )
}

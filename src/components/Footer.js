import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default function Footer() {
    return (
        <section id="contact">
            <ul id="connect-links">
                <li className="bold-font">Email: stephanie@transformedwithincounseling.com</li>
                <li className="bold-font">Phone Number: 225-255-2615</li>
            </ul>
        </section>
    )
}

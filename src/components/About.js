import React from 'react'
import '../App.css';
import steph from '../images/steph.png';

export default function About() {
    return (
        <div className="about">
            <h1>About</h1>
            <img src={steph} alt=""/>
            <p className="">
            Hello there! My name is Stephanie Coenen. I am a born and raised Louisiana resident who has
had the privilege of calling the Greater New Orleans area home for most of my life. I recently
relocated to Denham Springs and am excited to serve Louisiana residents through telehealth
counseling services. I am a practicing Catholic Christian who has found strength, direction,
lasting relationships, and countless tools through faith, and I strive to use these gifts along with
years of professional training to serve those I work with.
            <br/>
            <br/>
            I am a Licensed Professional Counselor and a Nationally Certified Counselor with 5 years of
counseling experience working with individuals, couples, families, and adolescents as well as
offering faith-based therapy.
            <br/>
            <br/>
            By approaching counseling from a holistic view – recognizing each client as a composite of
mind, body, and soul – I encourage clients to bring every resource they have to the counseling
experience. Techniques from several theories are used to establish individualized treatment
plans, with emphasis given to Cognitive Behavioral Therapy, Family Systems Therapy, and
Rational Psychology.
            <br/>
            <br/>
            While clients have the option to incorporate faith into their counseling experience, no client is
required to do so, nor is it a requirement for any client to belong to or practice any form of
spirituality.
            </p>
        </div>
    )
}

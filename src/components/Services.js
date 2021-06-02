import React from 'react'
import indiv from '../images/individual.jpg';
import adolescent from '../images/adolescent.jpg';
import family from '../images/family.jpg';
import couples from '../images/couples.jpg';
import faith from '../images/faith.jpg';

function Services() {
    return (
        <div className='servicesPage'>

            <h1>Services</h1>

            <h2 className='servicesTop'>All sessions are conducted in telehealth format through the use of Therapy Notes. Upon contacting the office for consultation and setup of the initial session, you will be sent a link for Therapy Notes to create a client account where all activity (i.e. completing initial paperwork, accessing sessions, and bill payment) will take place.</h2>


            <div className='servicesSingleCont'>
                <h2>Faith Based Counseling</h2>
                <div className='servicesSingleCont2'>
                    <div className='servicesSingleAbout'>
                        <img className='servicesSingleImg' src={faith}/>
                    </div>
                    <div className='servicesSingleAbout'>
                        <h2>Human kind has the unique ability to experience life not only through relationship with each other, but also through a relationship with God. Faith provides insight into our very existence, purpose, the trials we experience on Earth, and the hope we have for the future. By incorporating faith into counseling, you have the opportunity to see your presenting issues in a new light, find meaning in the struggle, and grow not only as a person but in your spiritual life as well. Faith-based counseling is not intended to force beliefs on clients, but rather offer clients the chance to draw from a very important and powerful part of their lives to assist them in their therapeutic journey. 
(While clients have the option to incorporate faith into their counseling experience, no client is required to do so, nor is it a requirement for any client to belong to or practice any form of spirituality.) </h2>
                    </div>
                </div>
            </div>

            <div className='servicesSingleCont'>
                <h2>Individual</h2>
                <div className='servicesSingleCont2'>
                    <div className='servicesSingleAbout'>
                        <img className='servicesSingleImg' src={indiv}/>
                    </div>
                    <div className='servicesSingleAbout'>
                        <h2>Life is full of many gifts and many burdens. Whether you need assistance making sense of the stressors in your life, finding healthy coping strategies, are dealing with anxiety, depression, anger issues, grief, trauma, loss, confusion about identity, struggles with self-esteem, difficulty with life transition, recently widowed, or navigating career difficulties, individual sessions are a great place to work through your presenting issues and find clarity, hope, peace, and create a path to the life you desire.</h2>
                    </div>
                </div>
            </div>

            {/* <div className='servicesSingleCont'>
                <h2>Adolescents</h2>
                <div className='servicesSingleCont2'>
                    <div className='servicesSingleAbout'>
                        <img className='servicesSingleImg' src={adolescent}/>
                    </div>
                    <div className='servicesSingleAbout'>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                    </div>
                </div>
            </div> */}

            <div className='servicesSingleCont'>
                <h2>Couples</h2>
                <div className='servicesSingleCont2'>
                    <div className='servicesSingleAbout'>
                        <img className='servicesSingleImg' src={couples}/>
                    </div>
                    <div className='servicesSingleAbout'>
                        <h2>Whether dating, engaged, married, on the brink of divorce, or anywhere in between, you can expect to receive support, insight, a voice, and ways to work through barriers that are preventing you from being your best selves as individuals and as a couple. Relationships have many hurdles to overcome, and often times unforeseen circumstances make them even more complicated. By offering a calm platform that allows each partner to offer his or her view of the relationship dynamic, guiding you through healthy communication techniques, and helping you to find new ways of problem solving, we will work together to build a happier, more insightful and cooperative relationship.</h2>
                    </div>
                </div>
            </div>

            <div className='servicesSingleCont'>
                <h2>Families</h2>
                <div className='servicesSingleCont2'>
                    <div className='servicesSingleAbout'>
                        <img className='servicesSingleImg' src={family}/>
                    </div>
                    <div className='servicesSingleAbout'>
                        <h2>Families come in all shapes and sizes in this world. Problems can develop due to differences in world views, family wounds that interfere with healing, outside events that cause damage to the family life previously established, divorce, remarriage, death or severed ties with a loved one. Family sessions allow each member a safe place to process the current family issues preventing family cohesion.</h2>
                    </div>
                </div>
            </div>

            {/* <div className='servicesSingleCont'>
                <h2>Faith Based Counseling</h2>
                <div className='servicesSingleCont2'>
                    <div className='servicesSingleAbout'>
                        <img className='servicesSingleImg' src={faith}/>
                    </div>
                    <div className='servicesSingleAbout'>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                    </div>
                </div>
            </div> */}

            <div className='servicesSingleCont'>
                <h2>Adolescents</h2>
                <div className='servicesSingleCont2'>
                    <div className='servicesSingleAbout'>
                        <img className='servicesSingleImg' src={adolescent}/>
                    </div>
                    <div className='servicesSingleAbout'>
                        <h2>Adolescents can be the highlight of or most difficult time of someone’s life. It is the time people usually start figuring out their place and role in the world around them, develop significant relationships, and go through many changes in a short span of time. Having someone outside of the family to assist you in making sense of these changes and developing healthy coping mechanisms can be an asset that serves you for the rest of your life. Start the transition to adulthood with your best foot forward, ready to concur whatever life has to throw at you.</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services

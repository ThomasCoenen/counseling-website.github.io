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

            <div className='servicesSingleCont'>
                <h2>Faith Based Counseling</h2>
                <div className='servicesSingleCont2'>
                    <div className='servicesSingleAbout'>
                        <img className='servicesSingleImg' src={faith}/>
                    </div>
                    <div className='servicesSingleAbout'>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
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
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
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
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
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
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
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
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services

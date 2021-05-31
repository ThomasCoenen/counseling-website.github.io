import React from 'react'
import { BrowserRouter, Route, Link} from 'react-router-dom';
import proj1img from '../images/Logo Cropped.png';
import banner from '../images/banner4.jpg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Nav() {
    return (
        <div className="header-wrap">

            <div className="headerTop">
                <Link to="/"><img className="logoImg" src={proj1img} alt="hi"/></Link>
                <Link to="/"><img className="stockImg" src={banner} alt="hi"/></Link>
            </div>

            <ul className="headerBottom">
                <li className="nav-list"><Link to="/">Home</Link></li>
                <li className="nav-list"><Link to="/about">About</Link></li>
                <li className="nav-list"><Link to="/services">Services</Link></li>

                {/* <li className="nav-list dropdownCont">
                    <div className="dropdown-select">
                        <div className="dropdown">
                            <Link to='/services' className="dropdownLink2 nav-list2">Services
                                <ArrowDropDownIcon className="carotHover"/>
                                <div className="dropdown-list">
                                    <Link to="/myevents" className="dropdown-list__item">Individual</Link>
                                    <Link to="/likes" className="dropdown-list__item">Couples</Link>
                                    <Link to="/likes" className="dropdown-list__item">Families</Link>
                                    <Link to="/likes" className="dropdown-list__item">Adolescents</Link>
                                    <Link to="/likes" className="dropdown-list__item">Faith Based Counseling</Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                </li> */}

                <li className="nav-list"><Link to="/rates">Rates</Link></li>
                <li className="nav-list"><Link to="/contact">Contact</Link></li>
                <li className="nav-list"><Link to="/faq">FAQ</Link></li>
            </ul>

        </div>
    )
}

export default Nav
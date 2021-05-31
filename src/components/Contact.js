import React, {useState} from 'react'
import '../App.css';
// import { Axios, db } from './firebase'

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("Send");

    return (
        <div className='contactPage'>
            <h1>Contact</h1>
            <h1 className='contactDesc'>You can also reach me directly here as well:You can also reach me directly here as well:You can also reach me directly here as well:You can also reach me directly here as well:</h1>
            <form className="form">

                <div className="doublebox">
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required 
                        placeholder="First name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required 
                        placeholder="Last name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="doublebox2">
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required 
                        placeholder="Phone number"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="doublebox2Messages">
                        <label htmlFor="email">Can I leave messages?</label>
                        <div className="doublebox2MessagesCont">
                            <label htmlFor="message">Yes</label>
                            <input 
                                type="checkbox" 
                                className="postCostCheckbox"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label style={{marginLeft:"5px"}} htmlFor="message">No</label>
                            <input 
                                type="checkbox" 
                                className="postCostCheckbox"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="singlebox">
                    <label htmlFor="message"></label>
                    <input 
                        type="text"
                        required 
                        placeholder="Email"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <div className="singlebox2">
                    <label htmlFor="message">Brief description of services being sought</label>
                    <textarea 
                        type="text"
                        // rows="8" 
                        // cols="35" 
                        required 
                        placeholder="Services"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <button className="submitcontactbutton" type="submit">Submit</button>

            </form>
        </div>
    );
};

import React, { useEffect, useState } from 'react'
import '../App.css';
import emailjs from 'emailjs-com';
// import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
// import { Axios, db } from './firebase'
import notice from '../notice.docx';

export default function Contact() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [messageSelection, setmessageSelection] = useState('');
    const [services, setServices] = useState("");
    const [checkedNo, setCheckedNo] = useState(false);
    const [checkedYes, setCheckedYes] = useState(false);
    // const [status, setStatus] = useState("Send");

    const files = [
        {
          name: "Photo 1",
          thumb:
            "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=427&q=80 427w",
          file:
            "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?rnd=" +
            Math.random(),
          filename: "photo-1.jpg",
        },
    ]

    const sendEmail = (e) => {
        e.preventDefault()
        console.log('messageSelectionForm',messageSelection)
        fetch("/send-email", {method:"post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({firstName, lastName, phoneNumber, email, messageSelection, services})
        })
        .then(res=>res.json())
        .then(data => {
            console.log("contactData:", data)
            if(data.error) {
                alert('Sorry there was an error sending your message')
            }
            else {  
                console.log(data)
                alert(data.message)
                setfirstName('')
                setlastName('')
                setphoneNumber('')
                setEmail('')
                setmessageSelection('')
                setServices('')
                setCheckedNo(false)
                setCheckedYes(false)
                // history.push("/login")
            }
        })
        .catch(err =>{console.log(err)})

        // emailjs.sendForm('gmail', 'template_9c4x758', e.target, 'YOUR_USER_ID')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
    }

    useEffect(()=>{

    },[messageSelection])

    return (
        <div className='contactPage'>
            <h1>Contact</h1>
            <h1 className='contactDesc'>To find out more about services, participate in a free 15 minute consultation, or to schedule an initial session, please call the office at 225-255-2615, or submit the following information which will be sent to me by email.</h1>
            <a className="privacyNotice" href={notice}>Notice of Privacy Practices</a>
            <div className="formDiv">
                {/* <input type="file" accept="application/vnd.ms-excel" /> */}
                {/* <a href="http://example.com/files/myfile.pdf" target="">Download</a> */}
                {/* <a href="data:application/octet-stream;charset=utf-16le;base64,//5mAG8AbwAgAGIAYQByAAoA">text file</a> */}
                

                <form className="form" onSubmit={sendEmail}>
                    
                    <div className="doublebox">
                        <input 
                            type="text" 
                            required 
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            required 
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                        />
                    </div>

                    <div className="doublebox2">
                        <input 
                            type="text" 
                            required 
                            placeholder="Phone number"
                            value={phoneNumber}
                            onChange={(e) => setphoneNumber(e.target.value)}
                        />
                        <div className="doublebox2Messages">
                            <label htmlFor="email">Can I leave messages?</label>
                            <div className="doublebox2MessagesCont">
                                <label htmlFor="message">Yes</label>
                                <input 
                                    type="checkbox" 
                                    className="postCostCheckbox"
                                    checked={checkedYes}
                                    value='Yes'
                                    onChange={(e) => {
                                        console.log(messageSelection)
                                        if(messageSelection==='No'){
                                            setCheckedNo(false)
                                            setCheckedYes(!checkedYes)
                                        } else (setCheckedYes(true))
                                        setmessageSelection(e.target.value)
                                    }}
                                />
                                <label style={{marginLeft:"5px"}} htmlFor="message">No</label>
                                <input 
                                    type="checkbox" 
                                    className="postCostCheckbox"
                                    checked={checkedNo}
                                    value='No'
                                    onChange={(e) => {
                                        console.log(messageSelection)
                                        if(messageSelection==='Yes'){
                                            setCheckedYes(false)
                                            setCheckedNo(!checkedNo)
                                        } else (setCheckedNo(true))
                                        setmessageSelection(e.target.value)
                                    }}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="singlebox2">
                        <label htmlFor="message">Brief description of services being sought:</label>
                        <textarea 
                            type="text"
                            required 
                            placeholder="Services"
                            value={services}
                            onChange={(e) => setServices(e.target.value)}
                        />
                    </div>

                    <button className="submitcontactbutton" type="submit">Submit</button>
                
                </form>
            </div>
        </div>
    );
};

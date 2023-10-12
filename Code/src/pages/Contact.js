import React from 'react'
import './contact.css'

export default function Contact() {
    return (
        <div className='container'>
            <div class="sloganMoving">
                <p>Work for a better tomorrow</p>
            </div>
            <center>
                <h1 className='side-header'>Contact Form</h1>
                <form >
                    <div className="formcontainer" >
                        <div>
                            <input type="text" id="name" name="name" placeholder="Enter your name" />
                        </div>
                        <div>
                            <input type="text" id="phone" name="phone" placeholder="Enter your phone no" />
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder="Enter your emailadress" />
                        </div>
                        <div>
                            <textarea id="message" rows="8" name="message" placeholder="Enter your message"></textarea>
                        </div>
                        <input className="btn" type="button" value="button" onclick = "parent.location='mailto:abc@abc.com'" />
                    </div>
                </form>
            </center>
        </div>
    )
}

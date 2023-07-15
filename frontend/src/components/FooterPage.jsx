import React from 'react'
import ContactPage from './ContactPage'

export default function FooterPage() {
  return (
    <div className='foot-background'>
        <div className="foot-content1">
            <div className="foot-content">
                <div className='foot-list'>
                    <h2>EMAIL ME</h2>
                        <form id="mail-form"> 
                            <div id="form-group"> 
                            <label for="name" id="name-label"> Message: </label> 
                            <input type="text" id="name" name="name" placeholder="Message" required></input>
                            </div> 

                            <div id="form-group"> 
                            <label for="email" id="email-label"> Email: </label> 
                            <input type="email" id="email" name="email" placeholder="Enter Your Email" required></input>
                            </div>
                        </form>
                        <button id='btn'>Send</button>
                </div>
                <div className="foot-list">
                    <h2>EXPLORE</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </div>
                <div className="foot-list">
                    <h2>PROJECTS</h2> 
                    <ul>
                        <li><a href="#">Afterclass</a></li>
                        <li><a href="#">CryptoRates</a></li>
                        <li><a href="#">Tic Tac Toe</a></li>
                        <li><a href="#">Dictionary</a></li>
                        <li><a href="#">Portfolio</a></li>
                    </ul>
                </div>
                <div className="foot-list">
                    <h2>VISIT</h2>
                    <ContactPage />
                </div>
            </div>
            <hr />
                <div className="overall">
                    <div className="overall-content">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">SKILLS</a></li>
                            <li><a href="#">PROJECT</a></li>
                            <li><a href="#">VISIT</a></li>
                            <li><a href="#">CONTACTS</a></li>
                        </ul>
                    </div>
                        <div className="license">
                            <small>© 2023 Agaspar. All Rights Reserved.</small>
                        </div>
                </div>
        </div>
    </div>
  )
}

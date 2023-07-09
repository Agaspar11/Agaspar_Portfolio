import React from 'react'
import ContactPage from './ContactPage'

export default function FooterPage() {
  return (
    <div>
        <ContactPage />
        <div className="foot-content">
            <div className='foot-list'>
                <h2>Email Me</h2>
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
                    <button>Send</button>
            </div>
            <div className="foot-list">
                <h2>Explore</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </div>
            <div className="foot-list">
                <h2>Projects</h2> 
                <ul>
                    <li><a href="#">Afterclass-CoffeeShop</a></li>
                    <li><a href="#">CryptoRates</a></li>
                    <li><a href="#">Tic Tac Toe</a></li>
                    <li><a href="#">ES-Dictionary</a></li>
                    <li><a href="#">Portfolio</a></li>
                </ul>
            </div>
            <div className="foot-list">
                <h2>Visit</h2>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Discord</a></li>
                    <li><a href="#">LinkedIn</a></li>\
                </ul>
            </div>
        </div>
        <div className="license">
            <small>© 2023 Agaspar. All Rights Reserved.</small>
        </div>
    </div>
  )
}

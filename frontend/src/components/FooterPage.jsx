import React from 'react'
import myLogo from './img/myLogo.png'
import {FaDiscord, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

export default function FooterPage() {
  return (
    <div className='foot-background' id='contacts'>
        <div className="foot-content1">
            <div className="foot-content">
                <div className='foot-list1'>
                    <img src={myLogo} alt="" />
                    <p className='foot-supp'>Your #1 resource for highly customizable and beautiful premium Codes and Designs that’ll help you to attract costumers using your website!</p>
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
                        <li><a href="https://after-class-coffee-shop.vercel.app/">Afterclass</a></li>
                        <li><a href="#">CryptoRates</a></li>
                        <li><a href="#">Tic Tac Toe</a></li>
                        <li><a href="#">Dictionary</a></li>
                        <li><a href="#">Portfolio</a></li>
                    </ul>
                </div>
                <div className="foot-list">
                    <h2>VISIT</h2>
                    <div class="contact-info">
                        <a href="https://www.facebook.com/DLatayada"><i><FaFacebookF /></i></a>
                        <a href="https://twitter.com/AgasparL"><i><FaTwitter /></i></a>
                        <a href="https://discord.com/users/1068422943383765013"><i><FaDiscord /></i></a>
                        <a href="#"><i><FaEnvelope /></i></a>
                        <a href="https://www.linkedin.com/in/agaspar11/"><i><FaLinkedinIn /></i></a>
                    </div>
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

import React from 'react'
import {FaDiscord, FaEnvelope, FaFacebook, FaLinkedin} from 'react-icons/fa'

export default function ContactPage() {
  return (
    <section id="contacts" className='slide-up'>
        <div class="contact-info">
            <a href="https://www.facebook.com/DLatayada"><i><FaFacebook /></i></a>
            <a href=""><i><FaDiscord /></i></a>
            <a href=""><i><FaLinkedin /></i></a>
            <a href=""><i><FaEnvelope /></i></a>
        </div>
      </section>
  )
}

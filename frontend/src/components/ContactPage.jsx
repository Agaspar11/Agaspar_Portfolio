import React from 'react'
import {FaDiscord, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

export default function ContactPage() {
  return (
    <section id="contacts" className='slide-up'>
        <div class="contact-info">
            <a href="https://www.facebook.com/DLatayada"><i><FaFacebookF /></i></a>
            <a href=""><i><FaTwitter /></i></a>
            <a href=""><i><FaDiscord /></i></a>
            <a href=""><i><FaEnvelope /></i></a>
            <a href=""><i><FaLinkedinIn /></i></a>
        </div>
      </section>
  )
}

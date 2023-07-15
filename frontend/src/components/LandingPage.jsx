import React from 'react'
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import FooterPage from './FooterPage';
import myLogo from   './img/myLogo.png';

export default function LandingPage() {
    document.addEventListener('DOMContentLoaded', function() {
        var navIcon = document.getElementById('nav-icon1');
        var sidebarLinks = document.querySelector('.sidebar-links');
      
        navIcon.addEventListener('click', function() {
          sidebarLinks.classList.toggle('active');
          this.classList.toggle('open');
        });
      });      
  return (
    <div>
        <div className="sidebar">
  <div className="sidebar-logo">
    <img src={myLogo} alt='me' />
  </div>
    <div id="nav-icon1">
        <span></span>
        <span></span>
        <span></span>
    </div>
  <div className="sidebar-links">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Skills</a></li>
      <li><a href="#skills">Projects</a></li>
      <li><a href="#experience">Visit</a></li>
      <li><a href="#contacts">Contacts</a></li>
    </ul>
  </div>
</div>

        <div className="content">
            <section id="home">
                <div className="home-content">
                    <h1>Agaspar Adrian Latayada.</h1>
                    <h2>Web Designer & Developer.</h2>
                    <p>
                    Agaspar Adrian Latayada is a talented front-end developer and web
                    designer who specializes in creating visually appealing and
                    interactive web experiences. With a strong foundation in both design
                    and development, Agaspar brings a unique blend of creativity and
                    technical expertise to his work.
                    </p>
                    <a href="#home" class="myButton">View my Portfolio</a>
                </div>
            </section>
            <AboutPage />
            <SkillsPage />
            <ExperiencePage />
            <FooterPage />
        </div>
    </div>
  );
}

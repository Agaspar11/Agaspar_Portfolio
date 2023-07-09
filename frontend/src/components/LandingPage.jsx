import React from 'react'
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import FooterPage from './FooterPage';

export default function LandingPage() {
  return (
    <div>
        <div className="sidebar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </div>
        <div className="content">
            <section id="home">
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
            </section>
            <AboutPage />
            <SkillsPage />
            <ExperiencePage />
            <FooterPage />
        </div>
    </div>
  );
}

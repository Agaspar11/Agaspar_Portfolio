import React from 'react';
import me from './img/me.jpg'

export default function AboutPage() {
  return (
    <section id="about">
    <div className="aboutMe">
        <img src={me} alt="agaspar" />
        <div className="about-container">
        <h2>About</h2>
        <p>
            Agaspar Adrian Latayada is a skilled and dedicated web designer and
            frontend developer who is passionate about creating captivating and
            intuitive digital experiences. With a strong focus on user-centric
            design and cutting-edge frontend technologies, Agaspar strives to
            deliver websites that not only look visually stunning but also
            provide exceptional usability and functionality.
        </p>

        <p>
            With a solid foundation in web design principles and best practices,
            Agaspar possesses a keen eye for aesthetics and an understanding of
            the importance of creating a cohesive brand identity. By blending
            creativity with technical expertise, he crafts visually striking
            interfaces that reflect the unique essence of each client's business
            or project.
        </p>
        </div>
    </div>
  </section>
  )
}

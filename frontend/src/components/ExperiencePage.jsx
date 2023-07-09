import React from 'react'
import afterclass from './img/afterclass.png'
import crypto from './img/crypto.png'
import tictactoe from   './img/tictactoe.png'
import video from './img/video.png'

export default function ExperiencePage() {
  return (
    <section id="experience">
    <div class="tech-experience">
        <h2>Technical Experience</h2>
        <p>
        Agaspar is a self taught and a coding bootcamp graduate web developer as of now I don't have any
        experience in real world job. Agaspar have experience making technical projects for Frontend. Also have technical experience in making web
        design and team collaboration.
        </p>
    </div>
    <div class="grid-container">
    <div class="grid-item">
      <a href="https://agaspar11.github.io/AfterClass-CoffeeShop/">
        <img src={afterclass} alt="Coffee shop" />
      </a>
    </div>
    <div class="grid-item">
      <a href="https://agaspar11.github.io/CryptoRates/">
        <img src={crypto} alt="Crypto rates" />
      </a>
    </div>
    <div class="grid-item">
      <a href="https://tic-tac-toe-coral-mu.vercel.app/">
        <img src={tictactoe} alt="Tic tac toe" />
      </a>
    </div>
    <div class="grid-item">
      <a href="https://video-code.vercel.app/">
        <img src={video} alt="Image description" />
      </a>
    </div>
    <div class="grid-item">
      <a href="your-link-url">
        <img src="your-image-url" alt="Image description" />
      </a>
    </div>
    <div class="grid-item">
      <a href="your-link-url">
        <img src="your-image-url" alt="Image description" />
      </a>
    </div>
    <div class="grid-item">
      <a href="your-link-url">
        <img src="your-image-url" alt="Image description" />
      </a>
    </div>
    <div class="grid-item">
      <a href="your-link-url">
        <img src="your-image-url" alt="Image description" />
      </a>
    </div>
  </div>
</section>
  )
}

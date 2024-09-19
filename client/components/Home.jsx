import React from 'react';
import cartoonLogo from '../src/assets/cartoon_logo.png';

const Home = () => (
  <div className='home-section'>
    <h2 className='h2-section'>Hello World.</h2>
    <img className='cartoon-logo' src={cartoonLogo} alt="My cartoon logo" />
    <p>I am Bianca, a Filipino soul seasoned in Singapore's spice, now embracing the Canadian chill -- I'm an international student in Software Engineering Technician at Centennial College.</p>
<p>
Embracing new horizons while I'm navigating my first Canadian adventure, all the way from Singapore's bustling streets. Still pinching myself, but loving every minute of it!
</p>
<p>
When I'm not diving into my studies, you'll find me cooking delicious recipes, capturing the world through my lens, or exploring new corners of the globe.
</p>
<p>Come along for the ride! 😊</p>

    <a href="/about">Learn More About Me</a>

<h2 className='h2-section'>My Mission.</h2>
    <p>As a passionate and dedicated Software Engineering Technician, my mission is to leverage technology to create innovative solutions that enhance user experiences and solve real-world problems. I strive to continuously expand my knowledge and skills in software development, focusing on building efficient, scalable, and user-friendly applications. </p>
    <p>I am committed to collaborating with diverse teams to foster creativity and drive impactful projects. My goal is to contribute to the tech community by developing software that not only meets functional requirements but also prioritizes accessibility and sustainability. Through my work, I aim to empower users and improve their daily lives, while embracing the challenges and opportunities that the ever-evolving tech landscape presents. Feel free to adjust any part of the statement to better reflect your personal values and aspirations.</p>
    
  </div>
);

export default Home;
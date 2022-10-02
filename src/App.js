import React from 'react';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Services from './Services.js';
import Projects from './Projects.js';
import Testimonials from './Testimonials.js';
import Contact from './Contact.js';
import Quote from './Quote.js';
import './style.css';

export default function App() {
  return (
    <div class="site-wrapper">
      <div class="nav-bar">
        <NavBar />
      </div>
      <div class="home-content">
        <Home />
      </div>
      <div class="services-content">
        <Services />
      </div>
      <div class="projects-content">
        <Projects />
      </div>
      <div class="testimonial">
        <Testimonials />
      </div>
      <div class="contact">
        <Contact />
      </div>
      <div class="getquote">
        <Quote />
      </div>
    </div>
  );
}

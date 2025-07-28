import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

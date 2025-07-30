import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial">
          <p>"The platform is fast and reliable. I love it!"</p>
          <h4>- Swati, Freelancer</h4>
        </div>
        <div className="testimonial">
          <p>"Helped scale our business effortlessly."</p>
          <h4>- Himanshu Saini, CreateASaaS Founder</h4>
        </div>
        <div className="testimonial">
          <p>"Simple UI and amazing support team!"</p>
          <h4>- Jitin Dhakarwal, Developer</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

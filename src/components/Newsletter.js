import React from 'react';
import '../styles/Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Stay in the Loop</h2>
      <p>Subscribe to get updates and news from us.</p>
      <form>
        <input type="email" placeholder="Your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;

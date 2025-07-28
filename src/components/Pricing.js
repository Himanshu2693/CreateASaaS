import React, { useState } from 'react';
import '../styles/Pricing.css';

const plans = [
  {
    name: 'Basic',
    price: 'Rs. 799/month',
    features: ['✔ 1 User', '✔ Basic Support', '✔ 5 Projects']
  },
  {
    name: 'Pro',
    price: 'Rs. 2499/month',
    features: ['✔ 5 Users', '✔ Priority Support', '✔ 50 Projects']
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: ['✔ Unlimited Users', '✔ Dedicated Support', '✔ Unlimited Projects']
  }
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="pricing">
      <h2>Choose Your Plan</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`card ${selectedPlan === index ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(index)}
          >
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <button>{selectedPlan === index ? 'Selected ✅' : 'Select'}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

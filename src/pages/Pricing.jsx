import React from 'react';
import '../index.css';

const Pricing = () => {

  return (
    <section className="enterprise-page">
      {/* 💰 Pricing Section */}
      <div className="pricing2-section" id="pricing">
        <h2 className="pricing-title">Choose Your Plan</h2>
        <div className="pricing-cards">
          {[
            { plan: "Basic", price: "$99/month", features: ["Up to 5000 messages/month", "Email support", "Access to basic features"] },
            { plan: "Premium", price: "$199/month", features: ["Up to 15,000 messages/month", "Priority support", "Advanced analytics and reporting"] },
            { plan: "Enterprise", price: "$499/month", features: ["Unlimited messages/month", "Dedicated account manager", "API access, Multi-device sync"] }
          ].map((plan, index) => (
            <div className="pricing-card" key={index}>
              <div className="plan">{plan.plan}</div>
              <div className="price">{plan.price}</div>
              <ul>
                {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
              <button className="cta-btn">Get Started</button>
            </div>
          ))}
        </div>
      </div>

    
    </section>
  );
};

export default Pricing;
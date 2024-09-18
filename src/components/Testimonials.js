import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Their services boosted our productivity by 50%!',
    },
    {
      name: 'Jane Smith',
      feedback: 'A reliable partner for our IT needs.',
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testi, idx) => (
          <div key={idx} className="testimonial-card">
            <p>"{testi.feedback}"</p>
            <h4>- {testi.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

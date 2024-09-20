import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat augue at risus tincidunt venenatis.',
      company: 'Acme Corp'
    },
    {
      name: 'Jane Smith',
      feedback: 'Vivamus a dolor at metus viverra fermentum sit amet eget justo. Praesent commodo, turpis nec commodo sodales, odio lorem aliquam magna.',
      company: 'Tech Innovations'
    },
    {
      name: 'Sam Wilson',
      feedback: 'Ut euismod erat ut nisi gravida, at condimentum nisi ultrices. Cras in velit non lorem aliquet lacinia sit amet et justo.',
      company: 'StartUp Solutions'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <p className="testimonial-feedback">"{testimonials[currentIndex].feedback}"</p>
          <h4 className="testimonial-name">- {testimonials[currentIndex].name}</h4>
          <p className="testimonial-company">{testimonials[currentIndex].company}</p>
        </div>
        <div className="testimonial-navigation">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

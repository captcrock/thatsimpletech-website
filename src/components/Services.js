import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      title: 'Managed Cloud Services',
      description: 'Optimize your cloud infrastructure for performance and scalability.'
    },
    {
      title: 'Website Construction and Maintenance',
      description: 'have a totally custom state-of-the-art website, keep it up-to-date, secure, and performing at its best.'
    },
    {
      title: 'Custom Software Development',
      description: 'Develop custom software solutions tailored to your business needs.'
    },
    {
      title: 'Cyber Security',
      description: 'Cutting edge threat protection on your data, software, and infrastructure'
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

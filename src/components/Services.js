import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      title: 'Managed Cloud Services',
      description: 'Optimize and manage your cloud infrastructure efficiently.',
    },
    {
      title: 'Website Maintenance',
      description: 'Keep your website up-to-date, secure, and running smoothly.',
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions to meet your business needs.',
    },
    // Add more services as needed
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

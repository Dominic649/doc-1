import React from 'react';

const Services = () => {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <p>Here are some of the services I offer, designed to bring creativity and innovation to your projects:</p>

      <div className="service-cards">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            Creating modern, responsive, and fully functional websites tailored to your business needs. 
            From front-end design to back-end development, I build seamless web applications that are intuitive and user-friendly.
          </p>
        </div>

        <div className="service-card">
          <h2>Graphic Design</h2>
          <p>
            Crafting visually stunning designs that make a lasting impression. Whether it's logo design, branding, or marketing materials, 
            I help businesses communicate effectively through visual creativity.
          </p>
        </div>

        <div className="service-card">
          <h2>Digital Marketing</h2>
          <p>
            Helping businesses grow through strategic digital marketing campaigns. From social media marketing to search engine optimization (SEO), 
            I optimize your online presence and increase visibility to drive engagement.
          </p>
        </div>

        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>
            Designing user interfaces and experiences that are not only beautiful but also functional. I prioritize user research and testing to ensure 
            an intuitive and enjoyable experience for your audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

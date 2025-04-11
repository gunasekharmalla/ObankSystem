import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Donated Organs",
    description: "Check real-time availability of organs List.",
    img: "/images/donatedorgans.jpeg",
  },
  {
    title: "Organ Requests",
    description: "Track incoming requests in real time.",
    img: "/images/request.jpeg",
  },
  {
    title: "Doctor & Hospital Connect",
    description: "Directly contact verified hospitals and specialists.",
    img: "/images/doctor.jpeg",
  },
  {
    title: "Emergency Services",
    description: "Get alerts for matching donors or emergency availability.",
    img: "/images/emergency.jpeg",
  },
  {
    title: "Donation Awareness Program",
    description: "Spread awareness about organ donation and how to register.",
    img: "/images/donation.jpeg",
  },
  {
    title: "AI Smart Assistance",
    description: "Leverage AI Assistant for smart access.",
    img: "/images/ai.jpeg",
  },
];


const cardVariants = {
  hidden: { opacity: 0, transform: 'translateY(50px)' },
  visible: (i) => ({
    opacity: 1,
    transform: 'translateY(0)',
    transition: { delay: i * 0.2 },
  }),
};

const Services = () => {
  return (
    <div id="new-services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="service-card"
        >
          <div className="service-image-container">
            <img src={service.img} alt={service.title} className="service-img" />
            <div className="service-overlay">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        </motion.div>
        
        ))}
      </div>
    </div>
  );
};

export default Services;

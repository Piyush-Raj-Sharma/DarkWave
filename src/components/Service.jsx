import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Web Development",
    description: "Build modern, responsive websites using the latest technologies like React, Node.js, and more.",
    icon: "💻"
  },
  {
    title: "UI-UX Design",
    description: "Create intuitive and engaging user experiences with design thinking and best practices.",
    icon: "🎨"
  },
  {
    title: "SEO Optimization",
    description: "Boost your website’s visibility and ranking on search engines with effective SEO strategies.",
    icon: "🚀"
  },
];

const cardStyle = {
  backgroundColor: "#2a2a3d",
  padding: "30px",
  borderRadius: "10px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  transition: "transform 0.3s ease",
  cursor: "pointer",
};

const Service = () => {
  const navigate = useNavigate();

  const handleCardClick = (service) => {
    navigate(`/service/details/${service.title}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#1e1e2f", 
        minHeight: "100vh",
        padding: "50px 20px",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          textAlign: "center",
          marginBottom: "40px",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        Our Services
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            role="button"
            aria-label={`View details of ${service.title}`}
            style={cardStyle}
            onClick={() => handleCardClick(service)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>{service.icon}</div>
            <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>{service.title}</h2>
            <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#d0d0d0" }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Service;

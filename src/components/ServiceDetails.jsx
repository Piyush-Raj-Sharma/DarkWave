import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div
      style={{
        backgroundColor: '#1e1e2f',
        maxHeight: '100vh',
        padding: '40px 15px',
        color: '#ffffff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: '30px',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '30px',
          letterSpacing: '0.5px',
        }}
      >
        {name}
      </h1>

      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#2a2a3d',
          borderRadius: '10px',
          padding: '25px 20px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
        }}
      >
        <p
          style={{
            fontSize: '15px',
            lineHeight: '1.6',
            color: '#d0d0d0',
            marginBottom: '25px',
          }}
        >
          You're viewing details for the <strong>{params.name}</strong> service. This section can include key features, tools used, outcomes, and more insights. Adapt it as needed.
        </p>

        <button
          onClick={() => navigate('/service')}
          aria-label="Go back to previous page"
          style={{
            backgroundColor: '#ffffff',
            color: '#1e1e2f',
            padding: '10px 22px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '14px',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#dddddd';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#ffffff';
          }}
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;

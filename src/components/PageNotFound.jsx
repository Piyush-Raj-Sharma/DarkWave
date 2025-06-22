import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: '#1e1e2f',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        padding: '50px 20px',
      }}
    >
      <div style={{ fontSize: '80px', marginBottom: '20px' }}>🚧</div>

      <h1 style={{ fontSize: '100px', margin: '0', fontWeight: '900', color: '#ff6f91' }}>
        404
      </h1>

      <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Page Not Found</h2>

      <p style={{ fontSize: '16px', color: '#d0d0d0', maxWidth: '600px', lineHeight: '1.8', marginBottom: '25px' }}>
        Oops! The page you're looking for doesn't exist, was moved, or the URL was mistyped. It's okay — these things happen! Use the button below to go back to a safe place.
      </p>

      <button
        onClick={() => navigate('/')}
        style={{
          backgroundColor: '#ff6f91',
          color: '#ffffff',
          padding: '12px 28px',
          borderRadius: '8px',
          border: 'none',
          fontWeight: '600',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#ff85a3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#ff6f91')}
      >
        ← Back to Home
      </button>

      <p style={{ marginTop: '50px', fontSize: '14px', color: '#888' }}>
        If you think this is a mistake, feel free to <span style={{ color: '#ff85a3' }}>contact support</span>.
      </p>
    </div>
  );
};

export default PageNotFound;

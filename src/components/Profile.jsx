import React from 'react';

const Profile = () => {
  return (
    <div
      style={{
        backgroundColor: '#1e1e2f',
        minHeight: '100vh',
        padding: '50px 20px',
        color: '#ffffff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: '42px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '30px',
          letterSpacing: '1px',
        }}
      >
        My Profile
      </h1>

      <div
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          backgroundColor: '#2a2a3d',
          borderRadius: '12px',
          padding: '35px 30px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.35)',
        }}
      >
        <div style={{ marginBottom: '25px' }}>
          <strong style={{ display: 'block', color: '#aaaaaa' }}>Name:</strong>
          <p style={{ fontSize: '16px' }}>Ujjwal Kumar</p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <strong style={{ display: 'block', color: '#aaaaaa' }}>Email:</strong>
          <p style={{ fontSize: '16px' }}>ujjwal@example.com</p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <strong style={{ display: 'block', color: '#aaaaaa' }}>Location:</strong>
          <p style={{ fontSize: '16px' }}>Patna, India</p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <strong style={{ display: 'block', color: '#aaaaaa' }}>Skills:</strong>
          <p style={{ fontSize: '16px' }}>
            HTML, CSS, JavaScript, React.js, Zustand, Tailwind CSS, Git
          </p>
        </div>

        <div style={{ marginBottom: '0' }}>
          <strong style={{ display: 'block', color: '#aaaaaa' }}>About Me:</strong>
          <p style={{ fontSize: '16px', color: '#d0d0d0', lineHeight: '1.7' }}>
            I'm Ujjwal Kumar, a passionate frontend developer who loves building clean and responsive UIs.
            Currently exploring deeper into React.js and modern web practices. I'm dedicated to mastering my craft
            and aiming to secure a strong position in tech to support my family and career goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

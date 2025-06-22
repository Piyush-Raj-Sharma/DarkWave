import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#1e1e2f',
        minHeight: '100vh',
        padding: '60px 20px',
        color: '#ffffff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: '46px',
          textAlign: 'center',
          fontWeight: '700',
          marginBottom: '30px',
          letterSpacing: '1px',
        }}
      >
        Welcome to Our Platform 🚀
      </h1>

      <p
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#d0d0d0',
          textAlign: 'center',
        }}
      >
        We help developers and businesses streamline their workflow with modern, reliable, and performant web applications.
        Whether you're here to explore, learn, or build — you're in the right place.
        Discover our services, meet our team, and get inspired to bring your next big idea to life.
      </p>

      <div
        style={{
          marginTop: '60px',
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
        }}
      >
        {[
          {
            title: '🛠 Tools',
            text: 'React, Node.js, Tailwind, Zustand — all the things we love and use.',
          },
          {
            title: '📚 Learn',
            text: 'We believe in constant learning — tutorials, docs, and guides to help you grow.',
          },
          {
            title: '💬 Connect',
            text: 'Have questions or feedback? Reach out to us and let’s talk tech.',
          },
        ].map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#2a2a3d',
              padding: '30px',
              borderRadius: '12px',
              width: '270px',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease, background 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h3 style={{ color: '#ff69b4', marginBottom: '10px', fontSize: '20px' }}>{card.title}</h3>
            <p style={{ fontSize: '15px', color: '#cccccc' }}>{card.text}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            backgroundColor: '#ff69b4',
            color: '#1e1e2f',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#ff85c1')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#ff69b4')}
        >
          Explore Services →
        </button>
      </div>
    </div>
  );
};

export default Home;

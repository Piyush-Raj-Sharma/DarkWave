import React from 'react';

const About = () => {
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
          fontSize: '48px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '50px',
          letterSpacing: '1px',
        }}
      >
        About Us
      </h1>

      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          backgroundColor: '#2a2a3d',
          borderRadius: '16px',
          padding: '50px 40px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
        }}
      >
        {/* Who We Are */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Who We Are</h2>
          <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#d0d0d0' }}>
            We’re a passionate team of engineers, designers, and creators crafting clean, scalable, and innovative web applications. From sleek UI to solid backend systems, we deliver full-stack solutions powered by technologies like React, Node.js, and MongoDB.
          </p>
        </section>

        {/* Our Mission */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Our Mission</h2>
          <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#d0d0d0' }}>
            Our mission is simple — build delightful user experiences with modern tools and timeless principles. We strive to connect creativity and logic, crafting digital products that make a difference.
          </p>
        </section>

        {/* What We Do */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>What We Do</h2>
          <ul style={{ fontSize: '17px', lineHeight: '1.8', color: '#d0d0d0', paddingLeft: '20px' }}>
            <li>💻 Build responsive & accessible UIs with React</li>
            <li>⚙️ Design scalable REST APIs with Node.js & Express</li>
            <li>🎨 Create stunning UI/UX for web & mobile platforms</li>
            <li>🚀 Deploy apps using cloud platforms like Vercel and Firebase</li>
            <li>🧠 Maintain clean code, testing, and performance best practices</li>
          </ul>
        </section>

        {/* Technologies */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Technologies We Love</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginTop: '10px',
            }}
          >
            {[
              'React',
              'Node.js',
              'MongoDB',
              'Express',
              'Tailwind CSS',
              'Figma',
              'Firebase',
              'GitHub',
            ].map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#3b3b4d',
                  padding: '10px 18px',
                  borderRadius: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  color: '#ffffff',
                  transition: 'background 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4c4c61')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3b3b4d')}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

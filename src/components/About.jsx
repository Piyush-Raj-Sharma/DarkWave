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
        {/* Overview */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#ffffff' }}>Who We Are</h2>
          <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#d0d0d0' }}>
            We are a team of engineers, designers, and dreamers dedicated to building elegant, modern, and high-performing web solutions.
            Whether you need a sleek frontend UI or a robust backend system, we specialize in full-stack development using technologies like React, Node.js, and more.
          </p>
        </section>

        {/* Mission */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#ffffff' }}>Our Mission</h2>
          <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#d0d0d0' }}>
            Our mission is to deliver cutting-edge software that not only works but also wows. We aim to bridge the gap between design and code,
            business and user, through thoughtfully crafted digital experiences.
          </p>
        </section>

        {/* What We Do */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#ffffff' }}>What We Do</h2>
          <ul style={{ color: '#d0d0d0', fontSize: '17px', lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>💻 Build responsive & accessible web interfaces with React</li>
            <li>⚙️ Develop scalable backend APIs using Node.js/Express</li>
            <li>🎨 Design intuitive UI/UX experiences for web & mobile</li>
            <li>🚀 Deploy and maintain cloud-hosted apps</li>
            <li>🧠 Embrace clean code and best practices in every project</li>
          </ul>
        </section>

        {/* Technologies */}
        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#ffffff' }}>Technologies We Love</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginTop: '10px',
            }}
          >
            {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Figma', 'Firebase', 'GitHub'].map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#3b3b4d',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#ffffff',
                }}
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

import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/product' },
  { name: 'Service', path: '/service' },
  { name: 'About', path: '/about' },
  { name: 'Profile', path: '/profile' },
];

const Nav = () => {
  return (
    <nav
      style={{
        backgroundColor: 'rgba(30, 30, 47, 0.9)',
        backdropFilter: 'blur(8px)',
        padding: '20px 30px',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '0 0 12px 12px',
      }}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            position: 'relative',
            color: isActive ? '#ff69b4' : '#e0e0e0',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '600',
            padding: '6px 10px',
            transition: 'all 0.3s ease',
          })}
        >
          {({ isActive }) => (
            <span style={{ position: 'relative', paddingBottom: '4px' }}>
              {item.name}
              <span
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  height: '2px',
                  width: isActive ? '100%' : '0%',
                  backgroundColor: '#ff69b4',
                  transition: 'width 0.3s ease',
                }}
              />
            </span>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;

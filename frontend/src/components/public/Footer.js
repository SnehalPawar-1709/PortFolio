import React from 'react';
import { useHiddenAdminAccess } from '../../utils/useHiddenAdminAccess';

const Footer = ({ name }) => {
  const { handleSecretMultiClick } = useHiddenAdminAccess();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: 'var(--color-slate-900)', padding: '2rem 0', textAlign: 'center' }}
    >
      {/* 
        Hidden admin access point #2: click this copyright line 5 times
        within 2 seconds to be taken to the admin login. There is no visual
        indication that this is interactive - it looks like plain footer text.
      */}
      <p
        onClick={handleSecretMultiClick}
        style={{
          color: 'rgba(255,255,255,0.45)',
          fontSize: '0.85rem',
          margin: 0,
          userSelect: 'none',
          cursor: 'default',
        }}
      >
        © {year} {name && name.trim() ? name : 'Portfolio'}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

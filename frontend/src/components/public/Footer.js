import React from 'react';
import { useHiddenAdminAccess } from '../../utils/useHiddenAdminAccess';

const Footer = ({ name }) => {
  const { handleSecretMultiClick } = useHiddenAdminAccess();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border)',
        padding: '2rem 0',
        textAlign: 'center',
      }}
    >
      <p
        onClick={handleSecretMultiClick}
        style={{
          color: 'var(--color-slate-500)',
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

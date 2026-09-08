import React, { useState } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ name }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid var(--color-border)',
        padding: '0.9rem 0',
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        
          href="#hero"
          className="navbar-brand m-0"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-slate-900)',
            fontSize: '1.3rem',
            fontWeight: 600,
          }}
        >
          {name && name.trim() ? name : 'Portfolio'}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle navigation"
          style={{ border: 'none', background: 'none' }}
        >
          <span style={{ display: 'block', width: 24, height: 2, backgroundColor: 'var(--color-slate-900)', marginBottom: 5 }} />
          <span style={{ display: 'block', width: 24, height: 2, backgroundColor: 'var(--color-slate-900)', marginBottom: 5 }} />
          <span style={{ display: 'block', width: 24, height: 2, backgroundColor: 'var(--color-slate-900)' }} />
        </button>

        <div className={`${expanded ? 'd-flex' : 'd-none'} d-lg-flex flex-column flex-lg-row`}>
          {NAV_LINKS.map((link) => (
            
              key={link.href}
              href={link.href}
              onClick={() => setExpanded(false)}
              className="mx-lg-3 py-2"
              style={{
                color: 'var(--color-slate-700)',
                fontSize: '0.92rem',
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

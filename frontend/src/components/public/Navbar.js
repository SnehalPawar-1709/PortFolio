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
      style={{ backgroundColor: 'var(--color-slate-900)', padding: '0.9rem 0' }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a
          href="#hero"
          className="navbar-brand m-0"
          style={{
            fontFamily: 'var(--font-display)',
            color: '#fff',
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
          style={{ border: 'none' }}
        >
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#fff',
              marginBottom: 5,
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#fff',
              marginBottom: 5,
            }}
          />
          <span style={{ display: 'block', width: 24, height: 2, backgroundColor: '#fff' }} />
        </button>

        <div className={`${expanded ? 'd-flex' : 'd-none'} d-lg-flex flex-column flex-lg-row`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setExpanded(false)}
              className="mx-lg-3 py-2"
              style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', fontWeight: 500 }}
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

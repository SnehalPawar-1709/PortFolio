import React from 'react';

const Hero = ({ profile, loading }) => {
  const hasContent = profile && (profile.name || profile.designation || profile.shortIntro);

  return (
    <section
      id="hero"
      style={{
        backgroundColor: 'var(--color-slate-900)',
        paddingTop: '9rem',
        paddingBottom: '6rem',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        {loading ? (
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Loading...</p>
        ) : !hasContent ? (
          <div style={{ color: 'rgba(255,255,255,0.55)' }}>
            <span
              className="section-label"
              style={{ color: 'var(--color-amber)' }}
            >
              Hero Section
            </span>
            <p className="empty-state" style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'left', padding: 0 }}>
              No profile information has been added yet. Add your name, designation, and a short
              introduction from the admin panel to populate this section.
            </p>
          </div>
        ) : (
          <div style={{ maxWidth: 680 }}>
            <span className="section-label">Welcome</span>
            <h1
              style={{
                color: '#fff',
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                lineHeight: 1.15,
                marginBottom: '0.8rem',
              }}
            >
              {profile.name}
            </h1>
            {profile.designation && (
              <h2
                style={{
                  color: 'var(--color-amber)',
                  fontSize: '1.4rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  marginBottom: '1.4rem',
                }}
              >
                {profile.designation}
              </h2>
            )}
            {profile.shortIntro && (
              <p
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '1.08rem',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}
              >
                {profile.shortIntro}
              </p>
            )}
            <div className="d-flex gap-3 flex-wrap">
              {profile.resumeLink && (
                <a
                  href={profile.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber"
                >
                  View Resume
                </a>
              )}
              <a href="#contact" className="btn-outline-slate" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

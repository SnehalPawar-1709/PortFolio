import React from 'react';

const Hero = ({ profile, loading }) => {
  const hasContent = profile && (profile.name || profile.designation || profile.shortIntro);

  return (
    <section
      id="hero"
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop: '9rem',
        paddingBottom: '6rem',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        {loading ? (
          <p style={{ color: 'var(--color-slate-500)' }}>Loading...</p>
        ) : !hasContent ? (
          <div>
            <span className="section-label">Hero Section</span>
            <p className="empty-state" style={{ textAlign: 'left', padding: 0 }}>
              No profile information has been added yet.
            </p>
          </div>
        ) : (
          <div style={{ maxWidth: 680 }}>
            <span className="section-label">Welcome</span>
            <h1
              style={{
                color: 'var(--color-slate-900)',
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
                  fontWeight: 600,
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
                  color: 'var(--color-slate-700)',
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
                
                  href={profile.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber"
                >
                  View Resume
                </a>
              )}
              
                href="#contact"
                className="btn-outline-slate"
                style={{
                  borderColor: 'var(--color-slate-900)',
                  color: 'var(--color-slate-900)',
                }}
              >
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

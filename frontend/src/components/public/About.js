import React from 'react';

const About = ({ profile }) => {
  const hasContent = profile && profile.aboutDescription && profile.aboutDescription.trim();

  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-label">Who I Am</span>
        <h2 className="section-title">About Me</h2>

        {!hasContent ? (
          <p className="empty-state" style={{ textAlign: 'left', padding: 0 }}>
            No about information has been added yet.
          </p>
        ) : (
          <p style={{ fontSize: '1.08rem', lineHeight: 1.8, maxWidth: 720, color: 'var(--color-slate-700)' }}>
            {profile.aboutDescription}
          </p>
        )}
      </div>
    </section>
  );
};

export default About;

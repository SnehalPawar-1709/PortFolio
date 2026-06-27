import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <span className="section-label">Where I've Worked</span>
        <h2 className="section-title">Experience</h2>

        {(!experiences || experiences.length === 0) ? (
          <p className="empty-state" style={{ textAlign: 'left', padding: 0 }}>
            No experience entries have been added yet.
          </p>
        ) : (
          <div style={{ maxWidth: 760, borderLeft: '2px solid var(--color-border)', paddingLeft: '2rem' }}>
            {experiences.map((exp) => (
              <div key={exp._id} style={{ marginBottom: '2.5rem', position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.45rem',
                    top: '0.3rem',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-amber)',
                  }}
                />
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                <p style={{ color: 'var(--color-amber)', fontWeight: 500, marginBottom: '0.2rem' }}>
                  {exp.companyName}
                </p>
                <p style={{ color: 'var(--color-slate-500)', fontSize: '0.85rem', marginBottom: '0.7rem' }}>
                  {exp.duration}
                </p>
                <p style={{ color: 'var(--color-slate-700)', lineHeight: 1.7 }}>{exp.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;

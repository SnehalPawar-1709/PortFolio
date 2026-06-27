import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <span className="section-label">What I Know</span>
        <h2 className="section-title">Skills</h2>

        {(!skills || skills.length === 0) ? (
          <p className="empty-state" style={{ textAlign: 'left', padding: 0 }}>
            No skills have been added yet.
          </p>
        ) : (
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill._id}
                style={{
                  backgroundColor: 'var(--color-amber-light)',
                  color: 'var(--color-slate-900)',
                  padding: '0.5rem 1.1rem',
                  borderRadius: '999px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  border: '1px solid var(--color-amber)',
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;

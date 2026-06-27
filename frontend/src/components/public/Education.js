import React from 'react';

const Education = ({ education }) => {
  return (
    <section id="education" className="section">
      <div className="container">
        <span className="section-label">Academic Background</span>
        <h2 className="section-title">Education</h2>

        {(!education || education.length === 0) ? (
          <p className="empty-state" style={{ textAlign: 'left', padding: 0 }}>
            No education entries have been added yet.
          </p>
        ) : (
          <div className="row g-4">
            {education.map((edu) => (
              <div className="col-md-6" key={edu._id}>
                <div className="card-elevated h-100 p-4">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h3 style={{ fontSize: '1.1rem' }}>{edu.degree}</h3>
                    <span style={{ color: 'var(--color-amber)', fontWeight: 600, fontSize: '0.9rem' }}>
                      {edu.year}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-slate-700)', fontWeight: 500, marginBottom: edu.description ? '0.6rem' : 0 }}>
                    {edu.collegeName}
                  </p>
                  {edu.description && (
                    <p style={{ color: 'var(--color-slate-500)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;

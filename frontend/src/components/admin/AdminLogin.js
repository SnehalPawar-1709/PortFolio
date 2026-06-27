import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setSubmitting(true);
    try {
      await login(username.trim(), password);
      navigate('/portal-x9k2-secure-access/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-slate-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        className="card-elevated"
        style={{ maxWidth: 400, width: '100%', padding: '2.5rem', backgroundColor: '#fff' }}
      >
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.4rem', textAlign: 'center' }}>
          Admin Access
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--color-slate-500)', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
          Sign in to manage your portfolio
        </p>

        {error && (
          <div
            style={{
              backgroundColor: '#FBEAE9',
              color: 'var(--color-danger)',
              padding: '0.7rem 1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.88rem',
              marginBottom: '1.2rem',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label style={{ fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.3rem', display: 'block' }}>
              Username
            </label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              autoComplete="username"
            />
          </div>
          <div className="mb-4">
            <label style={{ fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.3rem', display: 'block' }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="btn-amber w-100"
            disabled={submitting}
            style={{ border: 'none', cursor: submitting ? 'not-allowed' : 'pointer' }}
          >
            {submitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

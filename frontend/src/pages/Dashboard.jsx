import.meta.env.VITE_BACKEND_URL
import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
import { FiCopy, FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwords, setPasswords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    setIsLoading(true);
    console.log('Sending token:', token); // Debug token
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/passwords/all`, {
      headers: {
        Authorization: `Bearer ${token}`, // Fixed syntax
      },
    })
      .then((res) => {
        if (res.status === 401) {
          console.log('401 Unauthorized response received'); // Debug
          localStorage.removeItem('token');
          navigate('/login');
          return res.json().then((data) => {
            throw new Error(data.message || 'Unauthorized');
          });
        }
        if (!res.ok) {
          throw new Error('Failed to fetch passwords');
        }
        return res.json();
      })
      .then((data) => {
        setPasswords(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error('Fetch error:', err.message);
        setError(`Failed to load passwords: ${err.message}`);
        setPasswords([]);
      })
      .finally(() => setIsLoading(false));
  }, [token, navigate]);

  const handleAddPassword = () => {
    if (!website || !username || !password) {
      alert('Please fill in all fields');
      return;
    }
    setIsLoading(true);
    fetch('http://localhost:5000/api/passwords/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Fixed syntax
      },
      body: JSON.stringify({ website, username, password }),
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
          return res.json().then((data) => {
            throw new Error(data.message || 'Unauthorized');
          });
        }
        if (!res.ok) {
          throw new Error('Failed to add password');
        }
        return res.json();
      })
      .then((data) => {
        alert('Password added');
        setPasswords((prev) => [...prev, data]);
        setWebsite('');
        setUsername('');
        setPassword('');
      })
      .catch((err) => {
        console.error('Add password error:', err.message);
        alert(`Failed to add password: ${err.message}`);
      })
      .finally(() => setIsLoading(false));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert('Copied to clipboard!'))
      .catch((err) => console.error('Failed to copy:', err));
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Password Manager</h1>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/');
            }}
          >
            Logout
          </button>
        </header>

        {error && <div className="error-message">{error}</div>}

        <div className="dashboard-content">
          <div className="card add-password">
            <h2>Add New Password</h2>
            <input
              type="text"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {username && (
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(username)}
                >
                  <FiCopy />
                </button>
              )}
            </div>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="icon-group">
                <button
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
                {password && (
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(password)}
                  >
                    <FiCopy />
                  </button>
                )}
              </div>
            </div>
            <button onClick={handleAddPassword} disabled={isLoading}>
              {isLoading ? 'Adding...' : 'Add'}
            </button>
          </div>

          <div className="card saved-passwords">
            <h2>Saved Passwords</h2>
            {isLoading ? (
              <p>Loading passwords...</p>
            ) : passwords.length === 0 ? (
              <p>No passwords saved yet.</p>
            ) : (
              <ul>
                {passwords.map((item) => (
                  <li key={item._id}>
                    <div className="password-info">
                      <strong>{item.website}</strong>
                      <div className="credential-group">
                        <span>{item.username}</span>
                        <button
                          className="copy-btn"
                          onClick={() => copyToClipboard(item.username)}
                        >
                          <FiCopy />
                        </button>
                      </div>
                      <div className="credential-group">
                        <span>••••••••</span>
                        <button
                          className="copy-btn"
                          onClick={() => copyToClipboard(item.password)}
                        >
                          <FiCopy />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

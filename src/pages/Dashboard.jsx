import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="dashboard-page">
      <h2>Welcome to the Dashboard, {user?.firstName || user?.name}</h2>

      <div className="d-flex flex-column gap-3">
        {/* Display user email (or any other important user info) */}
        <div className="user-info">
          <h4>Email: {user?.email}</h4>
        </div>

        {/* Toggle password visibility (if needed) */}
        <div className="user-password">
          <h5>Password: 
            <span>{passwordVisible ? user?.password : '••••••••••••'}</span>
            <button type="button" onClick={togglePasswordVisibility} className="btn btn-sm btn-outline-secondary ms-2">
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </h5>
        </div>

        {/* Action buttons */}
        <div className="d-flex gap-3">
          <Link to="/profile" className="btn btn-outline-info">View Profile</Link>
          <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

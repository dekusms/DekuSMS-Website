import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/login'); // Redirect to login if not authenticated
    } else {
      setUser(storedUser);
      setForm(storedUser);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    // Save the updated user data back to localStorage
    localStorage.setItem('user', JSON.stringify(form));
    setUser(form);
    alert('Profile updated!');
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h2>Your Profile</h2>
      {user && (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" value={form.firstName} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" value={form.lastName} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} disabled />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              name="subscribed"
              label="Subscribed to newsletter"
              checked={form.subscribed}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Form>
      )}
    </Container>
  );
};

export default Profile;

import React, { useState, useContext } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
    subscribed: false,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword, agree } = form;

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Email and password fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!agree) {
      setError('You must agree to the terms and conditions.');
      return;
    }

    setError('');
    setSuccess(true);

    const { confirmPassword: _, ...userData } = form;
    localStorage.setItem('user', JSON.stringify(userData));

    setTimeout(() => {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h2>Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Sign up successful! Redirecting...</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name *</Form.Label>
          <Form.Control type="text" name="firstName" value={form.firstName} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name *</Form.Label>
          <Form.Control type="text" name="lastName" value={form.lastName} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email *</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password *</Form.Label>
          <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password *</Form.Label>
          <Form.Control type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            name="agree"
            label="I agree to the terms and conditions"
            checked={form.agree}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            name="subscribed"
            label="Subscribe to newsletter"
            checked={form.subscribed}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">Sign Up</Button>
      </Form>

      <div className="mt-3 text-center">
        <span>Already have an account? </span>
        <Link to="/login">Login here</Link>
      </div>
    </Container>
  );
};

export default SignUp;

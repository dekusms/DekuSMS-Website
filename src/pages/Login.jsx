import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || storedUser.email !== loginForm.email || storedUser.password !== loginForm.password) {
      setError("Invalid email or password.");
      return;
    }

    setError('');
    console.log('Login success', loginForm);

    navigate('/profile');
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email *</Form.Label>
          <Form.Control type="email" name="email" value={loginForm.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password *</Form.Label>
          <Form.Control type="password" name="password" value={loginForm.password} onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">Login</Button>
      </Form>

      <div className="mt-3 text-center">
        <span>Don't have an account? </span>
        <Link to="/signup">Sign up here</Link>
      </div>
    </Container>
  );
};

export default Login;

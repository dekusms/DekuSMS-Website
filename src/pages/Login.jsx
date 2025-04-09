import React, { useState, useContext } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedEmail = loginForm.email.trim();
    const trimmedPassword = loginForm.password.trim();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      !storedUser ||
      storedUser.email !== trimmedEmail ||
      storedUser.password !== trimmedPassword
    ) {
      setError('Invalid email or password.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        'user',
        JSON.stringify({ ...storedUser, email: trimmedEmail, password: trimmedPassword })
      );
      setLoading(false);
      setIsLoggedIn(true);
      console.log('Login successful:', loginForm);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Login</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password *</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100" disabled={loading}>
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </Button>
      </Form>

      <div className="mt-3 text-center">
        <span>Don't have an account? </span>
        <Link to="/signup">Sign up here</Link>
      </div>
    </Container>
  );
};

export default Login;

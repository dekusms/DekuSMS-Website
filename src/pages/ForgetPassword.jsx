// ForgotPassword.js
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    // Call your API or handle the logic here
    setSubmitted(true);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2>Reset Password</h2>
      {submitted ? (
        <Alert variant="success">Password reset link sent to your email!</Alert>
      ) : (
        <Form onSubmit={handleReset}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">Send Reset Link</Button>
        </Form>
      )}
    </Container>
  );
};

export default ForgotPassword;

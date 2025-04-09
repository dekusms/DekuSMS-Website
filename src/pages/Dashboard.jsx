import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Row, Col, Alert } from "react-bootstrap";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  if (!user) {
    return (
      <Container className="mt-5">
        <Alert variant="warning" className="text-center">
          <h4>You are not logged in</h4>
          <p>Please log in to access your dashboard.</p>
          <Button variant="primary" onClick={() => navigate("/login")}>
            Go to Login
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg">
        <Card.Body>
          <h2 className="mb-4">Welcome, {user.firstName || user.email}!</h2>
          <Row>
            <Col md={6}>
              <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Subscribed to newsletter:</strong> {user.subscribed ? "Yes" : "No"}</p>
            </Col>
            <Col md={6}>
              <p>This is your personalized dashboard. From here you can manage your account, access features, or log out.</p>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;

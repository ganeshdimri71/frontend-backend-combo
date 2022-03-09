import { Container, Row, Card, Form, Button, FormLabel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate, Routes } from "react-router-dom";

const LoginPanel = () => {
  let navigate = useNavigate();
  const [formData, updateFormData] = useState({
    email: "",
    password: "",
    error: "",
  });
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const emailValidation = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!formData.email || regex.test(formData.email) === false) {
      updateFormData({ ...formData, error: "Email is not Valid" });
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValidation()) {
      updateFormData(formData);
      navigate("/dashboard");
    }
  };

  return (
    <div
      style={{
        width: "22%",
        margin: "auto",
        marginTop: "10%",
      }}
    >
      <Container>
        <div>
          <Card>
            <Card.Header>
              <Card.Title className="text-center">
                <h1>Login</h1>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Enter email"
                  />
                  <span className="text-danger" style={{ fontFamily: "" }}>
                    {formData.error}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter password"
                  />
                </Form.Group>
                <Button
                  className="mt-3 btn btn-lg w-100"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};
export default LoginPanel;

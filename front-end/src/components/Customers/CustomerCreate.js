import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePostMutation } from "../../services/post";
import { Form, Col, Button } from "react-bootstrap";

const EditUser = () => {
  let [customerTOBeUpdated, setCustomerToBeUpdated] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [createPost] = useCreatePostMutation();

  let navigate = useNavigate();

  const onChangeClickHandler = (e) => {
    setCustomerToBeUpdated({
      ...customerTOBeUpdated,
      [e.target.name]: [e.target.value],
    });
  };

  const closePage = (e) => {
    e.preventDefault();
    navigate("/dashboard/customer");
  };

  return (
    <div
      className="position-absolute top-0"
      style={{ width: "88vw", left: "11%" }}
    >
      <h3>Personal Info</h3>
      <Form>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            placeholder="Enter FullName"
            value={customerTOBeUpdated.fullName}
            type="text"
            onChange={(e) => onChangeClickHandler(e)}
            name="fullName"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Enter Email"
            value={customerTOBeUpdated.email}
            type="email"
            onChange={(e) => onChangeClickHandler(e)}
            name="email"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            placeholder="Enter Mobile"
            value={customerTOBeUpdated.mobile}
            type="number"
            onChange={(e) => onChangeClickHandler(e)}
            name="mobile"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Enter Password"
            value={customerTOBeUpdated.password}
            type="password"
            onChange={(e) => onChangeClickHandler(e)}
            name="password"
            required
          />
        </Form.Group>
      </Form>

      <Form.Group>
        <Col md={12}>
          <div className="d-flex justify-content-between">
            <Button
              onClick={() => {
                createPost(customerTOBeUpdated);
                navigate("/dashboard/customer");
              }}
              value="Add Customer"
            >
              Add
            </Button>
            <Button onClick={closePage} value="Close">
              Close
            </Button>
          </div>
        </Col>
      </Form.Group>
    </div>
  );
};

export default EditUser;

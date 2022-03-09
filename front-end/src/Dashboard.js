import React, { useEffect } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { Col, Row, Nav } from "react-bootstrap";
import MaterialIcon, { colorPalette } from "material-icons-react";

export default function Dashboard() {
  const { customerid } = useParams();
  return (
    <div
      style={{ height: "100vh", width: "10%" }}
      className="bg-light responsive"
    >
      <Row>
        <Row>
          <Col
            md={2}
            className="d-flex flex-column justify-content-center mt-2 mb-3"
          >
            <MaterialIcon icon="dashboard" />
          </Col>
          <Col md={8} className="mt-2 ms-3 mb-3">
            Dashboard
          </Col>
        </Row>
        <Row>
          <Col md={2} className="d-flex flex-column justify-content-center">
            <MaterialIcon icon="sensor_occupied" />
          </Col>
          <Col md={8}>
            <Nav.Link
              className="text-secondary"
              as={NavLink}
              to={`/dashboard/customer`}
            >
              Customer
            </Nav.Link>
          </Col>
        </Row>
        <Row>
          <Col md={2} className="d-flex flex-column justify-content-center">
            <MaterialIcon icon="people" />
          </Col>
          <Col md={8}>
            <Nav.Link
              as={NavLink}
              to={`/dashboard/user`}
              className="text-secondary"
            >
              User
            </Nav.Link>
          </Col>
          <Outlet />
        </Row>
      </Row>
    </div>
  );
}

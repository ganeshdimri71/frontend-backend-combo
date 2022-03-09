import { useParams, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import {
  useGetPostByIdQuery,
  useUpdatePostMutation,
} from "../../services/customerPost";
import { Row, Col, Button, Form } from "react-bootstrap";
const CustomerUpdate = () => {
  const [customerTOBeUpdated, setCustomerToBeUpdated] = useState({
    fullName: "",
    email: "",
    mobile: "",
  });

  let navigate = useNavigate();
  const { id } = useParams();

  const responseInfo = useGetPostByIdQuery(id);
  const [updatePost] = useUpdatePostMutation();

  const onChangeClickHandler = (e) => {
    setCustomerToBeUpdated({
      ...customerTOBeUpdated,
      [e.target.name]: [e.target.value],
    });
  };
  const onClickHandler = () => {
    navigate("/dashboard/customer");
  };

  let updatePostData = {
    ...responseInfo.data,
    fullName: customerTOBeUpdated.fullName,
    mobile: customerTOBeUpdated.mobile,
    email: customerTOBeUpdated.email,
  };

  const closePage = (e) => {
    e.preventDefault();
    navigate("/dashboard/customer");
  };

  useEffect(() => {
    setCustomerToBeUpdated({
      fullName: responseInfo?.data?.fullName,
      email: responseInfo?.data?.email,
      mobile: responseInfo?.data?.mobile,
    });
  }, [responseInfo]);

  return (
    <div
      className=" position-absolute top-0"
      style={{ width: "88vw", left: "11%" }}
    >
      <Row>
        <Col md={12}>
          <h1></h1>
          <Form>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={customerTOBeUpdated.fullName}
                onChange={(e) => onChangeClickHandler(e)}
                name="fullName"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                value={customerTOBeUpdated.email}
                onChange={(e) => onChangeClickHandler(e)}
                name="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                required
                value={customerTOBeUpdated.mobile}
                name="mobile"
                type="number"
                min="0"
                placeholder="Enter mobile no"
                onChange={(e) => onChangeClickHandler(e)}
              />
            </Form.Group>
            <Form.Group>
              <Col md={12}>
                <div className="d-flex justify-content-between mt-2">
                  <Button
                    onClick={() => {
                      updatePost(updatePostData);
                      onClickHandler();
                    }}
                  >
                    Update
                  </Button>
                  <Button onClick={closePage} value="Close">
                    Close
                  </Button>
                </div>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerUpdate;

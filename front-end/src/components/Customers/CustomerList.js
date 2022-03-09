import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setCustomerDataInRedux } from "../../features/customerSlice";
import { useGetAllPostQuery, useDeletePostMutation } from "../../services/post";
import { Button, Table, Row, Col } from "react-bootstrap";
import { Link, useNavigate, Outlet } from "react-router-dom";

const CustomerList = () => {
  const { isLoading, isError } = useGetAllPostQuery(null, {
    pollingInterval: 600000,
  });
  const [deletePost] = useDeletePostMutation();

  const allCustomerDataFromStore = useSelector(
    (state) => state.customersData.customerInformation
  );

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const addCustomer = () => {
    navigate(`/dashboard/add`);
  };

  const onClickDeleteHandler = (id) => {
    const fetchUserData = async () => {
      const users = await axios.get("http://127.0.0.1:8000/accounts/list/");
      dispatch(setCustomerDataInRedux(users.data));
    };
    for (let i = 0; i < 2; i++) {
      fetchUserData();
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const users = await axios.get("http://127.0.0.1:8000/accounts/list/");
      dispatch(setCustomerDataInRedux(users.data));
    };
    for (let i = 0; i < 2; i++) {
      fetchUserData();
    }
  }, []);

  if (isLoading)
    return (
      <div
        className="position-absolute top-0 responsive"
        style={{ width: "100%", left: "11%" }}
      >
        fetching...
      </div>
    );

  if (isError)
    return (
      <h1
        className="position-absolute top-0 responsive"
        style={{
          width: "100%",
          left: "11%",
        }}
      >
        An error occured{" "}
      </h1>
    );

  return (
    <>
      <div
        style={{ width: "100%", left: "11%" }}
        className=" position-absolute top-0 responsive"
      >
        <>
          <Row className="mb-4 mt-3">
            <Col md={8}>
              <h5 className="text-center">Customer Data</h5>
            </Col>
            <Col md={4}>
              <Button onClick={addCustomer} className="btn-primary btn-sm ms-5">
                Add Customer
              </Button>
            </Col>
          </Row>
        </>
        <Table responsive className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col" colSpan="2">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {allCustomerDataFromStore.length != 0 &&
              allCustomerDataFromStore.map((elem, index) => {
                return (
                  <tr
                    key={
                      "header" +
                      elem.password.slice(2, 6) +
                      elem.email.slice(0, 6)
                    }
                  >
                    <th scope="row">{index + 1}</th>
                    <th scope="row">{elem.fullName}</th>
                    <td>{elem.email}</td>
                    <td>{elem.mobile}</td>
                    <td>
                      <Link
                        className="btn btn-primary btn-sm me-3"
                        to={`/dashboard/${elem.id}`}
                      >
                        Update
                      </Link>
                      <Button
                        className="btn btn-primary btn-sm me-3"
                        onClick={() => {
                          deletePost(elem.id);
                          onClickDeleteHandler(elem.id);
                        }}
                      >
                        Delete
                      </Button>
                      <Outlet />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CustomerList;

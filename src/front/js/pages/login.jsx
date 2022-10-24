import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div>
        <div className="d-flex">
          <span className="p-2 center-label">
            <i className="fa fa-star "></i>
          </span>
          <h1 className="p-2 flex-grow-1">Login</h1>
          <button className="btn btn-primary p-2 m-2">Close</button>
        </div>
        <div>
          <Form id="myForm" action="">
            <Form.Group as={Row} className="mb-2 bg-light p-2 mt-3">
              <Col sm={3}></Col>

              <Form.Label column sm={2} className="mb-2 bg-light">
                Usuario
              </Form.Label>
              <Col sm={3}>
                <Form.Control id="user" type="text" />
              </Col>
              <Col sm={4}></Col>

              <Col sm={3}></Col>
              <Form.Label column sm={2} className="mb-2">
                Password
              </Form.Label>
              <Col sm={3}>
                <Form.Control id="password" type="password" />
              </Col>
              <Col sm={4}></Col>

              <Col sm={3}></Col>
              <Form.Label column sm={2} className="mb-2">
                Perfil
              </Form.Label>
              <Col sm={5}></Col>
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary p-2 m-2"
              form="myForm"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

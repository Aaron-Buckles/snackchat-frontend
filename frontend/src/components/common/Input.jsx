import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Input = ({ name, label, error, children, ...options }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...options} name={name} />
      {children}
      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
};

export default Input;

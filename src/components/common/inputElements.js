import React from "react";

// Interface
import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import { Loader } from "./Loader";

export function ButtonWithLoading({ name, text, loading, ...options }) {
  return (
    <AwesomeButton type="primary" name={name} {...options} disabled={loading}>
      {(loading && <Loader light />) || text}
    </AwesomeButton>
  );
}

export function Input({ name, label, error, children, ...options }) {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control name={name} {...options} />
      {children}
      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
}

export function Select({
  name,
  label,
  selectOptions,
  error,
  children,
  ...rest
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />
        {selectOptions &&
          selectOptions.map(option => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

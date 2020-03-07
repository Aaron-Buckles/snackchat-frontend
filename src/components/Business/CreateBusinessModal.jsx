import React, { useState } from "react";

// Interface
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { ButtonWithLoading, Input } from "../common/inputElements";
import { toast } from "react-toastify";

// Hooks
import { useSubmit } from "../../customHooks/use-submit";

export default function BusinessForm({ businesses, showing, setShowing }) {
  const [business, setBusiness] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    lat: 0,
    long: 0
  });

  const onChange = e => {
    const { name, value } = e.target;
    setBusiness({ ...business, [name]: value });
  };

  const onBusinessCreated = useSubmit(async e => {
    e.preventDefault();
    try {
      await businesses.create(business);
      setShowing(false);
      businesses.fetch();
    } catch (err) {
      if (err.response.data.err) toast.error(err.response.data.err);
      else toast.error("An error occured, please try again later");
    }
  });

  return (
    <Modal
      size="lg"
      show={showing}
      onHide={() => setShowing(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Create Business
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onBusinessCreated.exec}>
          <Input
            type="text"
            name="name"
            label="Business Name"
            maxLength="50"
            placeholder="Enter business name"
            onChange={onChange}
            required
          />

          <Input
            type="text"
            name="address"
            label="Business Address"
            placeholder="1313 Disneyland Dr"
            onChange={onChange}
            required
          />
          <Form.Row>
            <Input
              type="text"
              name="city"
              label="City"
              placeholder="Anaheim"
              onChange={onChange}
              groupAs={Col}
              required
            />
            <Input
              type="text"
              name="state"
              label="State"
              placeholder="CA"
              onChange={onChange}
              groupAs={Col}
              required
            />

            <Input
              type="text"
              name="postalCode"
              label="Postal Code"
              placeholder="92802"
              onChange={onChange}
              groupAs={Col}
              required
            />
          </Form.Row>
          <Form.Row>
            <Input
              type="text"
              name="lat"
              label="Latitude"
              placeholder="33.8121"
              onChange={onChange}
              groupAs={Col}
              required
            />
            <Input
              type="text"
              name="long"
              label="Longitude"
              placeholder="117.9190"
              onChange={onChange}
              groupAs={Col}
              required
            />
          </Form.Row>

          <ButtonWithLoading
            name="createBusiness"
            text="Create"
            type="primary"
            loading={onBusinessCreated.loading}
            className="btn-block mb-4"
          />
        </Form>
      </Modal.Body>
    </Modal>
  );
}

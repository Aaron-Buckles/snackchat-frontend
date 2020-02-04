import React from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function FoodTags(props) {
  return (
    <div className="mb-3">
      <ToggleButtonGroup
        className="d-flex justify-content-around"
        type="checkbox"
        value={props.selectedTags}
        onChange={props.onTagSelect}
      >
        <ToggleButton
          className="mx-1"
          variant="outline-success"
          value={"Burger"}
        >
          Burger
        </ToggleButton>
        <ToggleButton
          className="mx-1"
          variant="outline-success"
          value={"Noodle"}
        >
          Noodle
        </ToggleButton>
        <ToggleButton
          className="mx-1"
          variant="outline-success"
          value={"Vegan"}
        >
          Vegan
        </ToggleButton>
        <ToggleButton
          className="mx-1"
          variant="outline-success"
          value={"Mexican"}
        >
          Mexican
        </ToggleButton>
        <ToggleButton
          className="mx-1"
          variant="outline-success"
          value={"Bakeries"}
        >
          Bakeries
        </ToggleButton>
      </ToggleButtonGroup>
    </div>

    // <Nav
    //   className="justify-content-center mb-3"
    //   variant="pills"
    //   defaultActiveKey="Burger"
    //   onSelect={props.tagSelect}
    // >
    //   <Nav.Item>
    //     <Nav.Link href="Burger">Burger</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="Noodle">Noodle</Nav.Link>
    //   </Nav.Item>
    // </Nav>
  );
}

export default FoodTags;

import React from "react";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 10px auto;
  border-color: black;
`;

export const Loader = ({ light }) => {
  let color = light ? "white" : "#4a90e2";

  return <BarLoader css={override} color={color} />;
};

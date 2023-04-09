import React from "react";
import { css } from "astroturf";
import "../styles/varables.css";

export const App = () => {
  return (
    <div className={test}>
      <h1>Welcome, friend!</h1>
    </div>
  );
};

const test = css`
  color: var(--color-main);
  cursor: pointer;

  &:hover {
    color: var(--color-main-hover);
  }
`;

import React from "react";
import { css } from "astroturf";

export const App = () => {
  return (
    <div className={test}>
      <h1>Welcome, friend!</h1>
    </div>
  );
};

const test = css`
  color: oklab(40% 0.001236 0.0039);;
  cursor: pointer;

  &:hover {
    color: oklch(40% 0.268735435 34.568626);
  }
`;

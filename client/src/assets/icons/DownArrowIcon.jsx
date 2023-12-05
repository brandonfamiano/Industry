import React from "react";

export const DownArrowIcon = ({ width = 12 }) => {
  const height = (8 * width) / 12;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1.5L6 6.5L1 1.5"
        stroke="#63666A"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

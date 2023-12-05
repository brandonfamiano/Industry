import React from "react";

export const LeftArrowIcon = ({ width = 24 }) => {
  const height = (25 * width) / 24;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 17.5L9.5 12.5L14.5 7.5"
        stroke="#63666A"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

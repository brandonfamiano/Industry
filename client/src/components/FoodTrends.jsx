import React from "react";
import { FoodCard } from "./FoodCard";

export const FoodTrends = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <FoodCard id={item} />
      ))}
    </>
  );
};

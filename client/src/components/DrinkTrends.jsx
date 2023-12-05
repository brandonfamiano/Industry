import React, { useEffect, useState } from "react";
import { FoodCard } from "./FoodCard";
import { TrendModal } from "./TrendModal";

import axios from "axios";

export const DrinkTrends = () => {
  const [drinkData, setDrinkData] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(null);

  const getFoodData = async () => {
    const res = await axios.get("http://localhost:4000/trends/drink");
    setDrinkData(res.data);
  };

  useEffect(() => {
    getFoodData();
  }, []);
  return (
    <>
      {drinkData.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setSelectedDrink(item._id);
          }}
        >
          <FoodCard image={`/trends-photos/${item.image}`} name={item.name} />
        </div>
      ))}
      {selectedDrink && (
        <TrendModal id={selectedDrink} setSelectedFood={setSelectedDrink} />
      )}
    </>
  );
};

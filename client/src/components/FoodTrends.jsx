import React, { useEffect, useState } from "react";
import { FoodCard } from "./FoodCard";
import { TrendModal } from "./TrendModal";
import axios from "axios";

export const FoodTrends = () => {
  const [foodData, setFoodData] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  const getFoodData = async () => {
    const res = await axios.get("http://localhost:4000/trends/food");
    setFoodData(res.data);
  };

  useEffect(() => {
    getFoodData();
  }, []);

  return (
    <>
      {foodData.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setSelectedFood(item._id);
          }}
        >
          <FoodCard
            id={item.id}
            image={`/trends-photos/${item.image}`}
            name={item.name}
          />
        </div>
      ))}
     {selectedFood && <TrendModal id={selectedFood} setSelectedFood={setSelectedFood} />}
    </>
  );
};

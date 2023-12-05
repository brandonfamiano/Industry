import "./App.css";
import { MainPage } from "./pages/MainPage";
import { Trends } from "./pages/Trends";
import { DrinkTrends } from "./components/DrinkTrends";
import { FoodTrends } from "./components/FoodTrends";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" Component={MainPage} />
      <Route Component={Trends}>
        <Route index path="/trends/food" Component={FoodTrends} />
        <Route path="/trends/drink" Component={DrinkTrends} />
      </Route>
    </Routes>
  );
}

export default App;

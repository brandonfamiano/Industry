import Backend from "./pages/Backend";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import BackendTest2 from "./pages/BackendTest2";
import BackendTrendsTest from "./pages/BackendTrendsTest";
import BackendAddTrendsTest from "./pages/BackendAddTrendsTest";
import BackendItemPageTest from "./pages/BackEndItemPageTest";
axios.defaults.baseURL = "http://localhost:4000";
import Menu from "./pages/Menu/Menu.jsx";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { Trends } from "./pages/Trends";
import { DrinkTrends } from "./components/DrinkTrends";
import { FoodTrends } from "./components/FoodTrends";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route Component={Trends}>
          <Route index path="/trends/food" Component={FoodTrends} />
          <Route path="/trends/drink" Component={DrinkTrends} />
        </Route>
        <Route path="/" element={<Backend />}></Route>
        <Route path="/backend" element={<BackendTest2 />} />
        <Route path="/backendTrends" element={<BackendTrendsTest />} />
        <Route path="/backendtrends/add" element={<BackendAddTrendsTest />} />
        <Route
          path="/backendtrends/:itemId"
          element={<BackendItemPageTest />}
        />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;

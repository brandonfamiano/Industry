import Backend from "./pages/Backend";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import BackendTest2 from "./pages/BackendTest2";
import BackendTrendsTest from "./pages/BackendTrendsTest";
import BackendAddTrendsTest from "./pages/BackendAddTrendsTest";
import BackendItemPageTest from "./pages/BackEndItemPageTest";
axios.defaults.baseURL = "http://localhost:4000";
import Menu from "./pages/Menu/Menu.jsx";
import NewMenuItem from "./pages/new_menuitem/NewMenuItem";
import { MainPage } from "./pages/MainPage";
import { Trends } from "./pages/Trends";
import { DrinkTrends } from "./components/DrinkTrends";
import { FoodTrends } from "./components/FoodTrends";

import Header from "./components/Header/Header";
import NewMenuSpecial from "./pages/NewMenuSpecial";
import Layout from "./Layout.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>} />
          <Route Component={Trends}>
            <Route index path="/trends/food" Component={FoodTrends} />
            <Route path="/trends/drink" Component={DrinkTrends} />
          </Route>
          <Route path="/menu" element={<Menu />} />
          <Route path="/create-new" element={<NewMenuItem />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

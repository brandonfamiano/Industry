import Backend from "./pages/Backend";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
import Menu from "./pages/Menu/Menu.jsx";
import NewMenuItem from "./pages/new_menuitem/NewMenuItem";
import { MainPage } from "./pages/MainPage";
import { Trends } from "./pages/Trends";
import { DrinkTrends } from "./components/DrinkTrends";
import { FoodTrends } from "./components/FoodTrends";
import Header from "./components/Header/Header";
import NewMenuSpecial from "./pages/NewMenuSpecial";
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route Component={Trends}>
          <Route index path="/trends/food" Component={FoodTrends} />
          <Route path="/trends/drink" Component={DrinkTrends} />
        </Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/create-new" element={<NewMenuItem />} />
        <Route path="/create-new/special" element={<NewMenuSpecial/>}/>
      </Routes>
    </div>
  );
}

export default App;

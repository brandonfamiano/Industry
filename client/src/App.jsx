import Backend from "./pages/Backend";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import BackendTest2 from "./pages/BackendTest2";
import BackendTrendsTest from "./pages/BackendTrendsTest";
import BackendAddTrendsTest from "./pages/BackendAddTrendsTest";
import BackendItemPageTest from "./pages/BackEndItemPageTest";
axios.defaults.baseURL = "http://localhost:4000";
import Menu from "./pages/Menu/Menu.jsx";

import Header from "./components/Header/Header";
import NewMenuSpecial from "./pages/NewMenuSpecial";
function App() {
  return (
    <div>
      <Routes>
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

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NewMenuSpecial from "./pages/NewMenuSpecial";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/create-new-menu/special" element={<NewMenuSpecial />} />
      </Routes>
    </div>
  );
}

export default App;

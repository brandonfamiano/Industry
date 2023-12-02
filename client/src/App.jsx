import Backend from "./pages/Backend"
import { Route , Routes } from "react-router-dom"
import axios from "axios";
import BackendTest2 from "./pages/BackendTest2";
import BackendTrendsTest from "./pages/BackendTrendsTest";
import BackendAddTrendsTest from "./pages/BackendAddTrendsTest";
import BackendItemPageTest from "./pages/BackEndItemPageTest";
axios.defaults.baseURL ='http://localhost:4000'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Backend/>}></Route>
        <Route path='/backend' element={<BackendTest2/>}/>
        <Route path='/backendTrends' element={<BackendTrendsTest/>}/>
        <Route path='/backendtrends/add' element={<BackendAddTrendsTest/>}/>
        <Route path="/backendtrends/:itemId" element={<BackendItemPageTest />} />
      </Routes>
    </div>
  )
}

export default App

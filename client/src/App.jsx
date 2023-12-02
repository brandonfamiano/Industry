import Backend from "./pages/Backend"
import { Route , Routes } from "react-router-dom"
import axios from "axios";
import BackendTest2 from "./pages/BackendTest2";
axios.defaults.baseURL ='http://localhost:4000'
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Backend/>}></Route>
        <Route path='/backend' element={<BackendTest2/>}/>
      </Routes>
    </div>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

// Page Components
import NewMenuItem from './pages/new_menuitem/NewMenuItem';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/create-new' element={<NewMenuItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

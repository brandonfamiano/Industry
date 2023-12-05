

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

import { useState } from 'react'
import Home from './pages/Home'
import Button from './components/Button'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './config/routes'


function App() {

  return (
    <BrowserRouter>
      <><Navbar />
        <Routes>
          {
            routes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.component />
                }
                />
            )) 

          }
        </Routes>
        </>
    </BrowserRouter>

  )
}

export default App

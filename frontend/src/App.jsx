import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<Page1/>} path={"/Page1"} />
          <Route element={<Page2/>} path={"/Page2"} />
          <Route element={<Home/>} path={"/"} />
          
        </Routes>



      </BrowserRouter>
    </>
  )
}

export default App

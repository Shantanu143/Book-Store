
//port React from 'react'

import { Outlet } from "react-router-dom"
import Navbar from "./container/Navbar"
import './App.css';
const App = () => {
  return (
    <div>

      <Navbar />
      <Outlet />
    </div>
  )
}

export default App


//port React from 'react'

import { Outlet } from "react-router-dom"
import Navbar from "./container/Navbar"

const App = () => {
  return (
    <div>

      <Navbar />
      <Outlet />
    </div>
  )
}

export default App

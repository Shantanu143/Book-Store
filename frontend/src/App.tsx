
//port React from 'react'

import FooterComponent from './footerComponent/FooterComponent'
import { Outlet } from "react-router-dom"
import Navbar from "./container/Navbar"
import './App.css';
const App = () => {
  return (
    <div>

      <Navbar />
      <Outlet />

      <FooterComponent />
    </div>
  )
}

export default App

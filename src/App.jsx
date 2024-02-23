import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Red from './components/red'
import Blue from './components/blue'


function App() {
  

  return (
    <><div id="container">
    <div id="navbar">
      <Link to="/"Home></Link>
      <Link to="/">Blue</Link>
      <Link to="/">Red</Link>
    </div>
    <div id="main-section">
  <Routes>
  <Route path="/blue" Blue={<h1>Blue</h1>} />
  <Route path="/red" Red={<h1>Red</h1>} /> 
  </Routes>
</div>
  </div>
      
    </>
  )
}

export default App

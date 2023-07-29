// import { useState } from 'react'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { Navbar } from "./components"
import { Home } from "./pages"


function App() {


  return (
    <div className="grid">
      <Navbar />
      <Home />
    </div>
  )
}

export default App

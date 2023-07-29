// import { useState } from 'react'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { Navbar } from "./components"
import { Home } from "./pages"
import { Footer } from './components/Footer';


function App() {


  return (
    <div className="grid">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App

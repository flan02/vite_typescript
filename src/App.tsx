// import { useState } from 'react'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { Navbar } from "./components"
import { Home } from "./pages"
import { Footer } from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {


  return (
    <Provider store={store}>
      <div className="grid">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </Provider>
  )
}

export default App

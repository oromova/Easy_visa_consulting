import React from 'react'
import Header from './Components/Header';
import Home from './Pages/Home';
import Popular from './Pages/Popular';
import About from './Pages/About';
import Country from './Pages/Country';

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Popular/>
      <About/>
      <Country/>
    </div>
  )
}

export default App
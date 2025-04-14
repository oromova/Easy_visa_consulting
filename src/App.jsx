import React from 'react';
import Header from './Components/Header';
import Home from './Pages/Home';
import Popular from './Pages/Popular';
import About from './Pages/About';
import Country from './Pages/Country';
import Travel from './Pages/Travel';
import Comments from './Pages/Comments';
import Service from './Pages/Service';
import Turizm from './Pages/Turizm';
import OurTravels from './Pages/OurTravels';
import Footer from './Components/Footer';

const App = () => {
return (
  <div>
    <Header />
    <Home />
    <Popular />
    <About />
    <Country />
    <Travel />
    <Comments />
    <Turizm />
    <Service />
    <OurTravels />
    <Footer />
  </div>
);
};

export default App;
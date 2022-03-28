import React from 'react';
//import TestNine from './components/TestNine';

import Navbar from './components/Navbar';
import TestOne from './components/TestOne';
import {Chart} from './components/BarChart';
import BarChart3 from './components/BarChart3';
//import MyMapComponent from './components/Maps';
//import TestTwo from './components/TestTwo';
//import TestThree from './components/TestThree';
//import TestFour from './components/TestFour';
//import TestFive from './components/TestFive';
//import TestSix from './components/TestSix';
//import Welcome from './components/Welcome';
//import Services  from './components/Services';
//import Footer  from './components/Footer';
//import MultipleReturns from './components/TestSeven';
//import TestEight from './components/TestEight';
const App = () => {
  

  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
  )
  
  return (
    
    <div className="contianer  w-screen">
      <div className=" w-screen">
        <Navbar />
        <TestOne/>
      <BarChart3/>
      
       
      </div>
    </div>
  
  );
};

export default App;
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from "./pages/Home";
import NetflixShow from './pages/NetflixShow';


function App() {
  return (
    <Router>
    <div className="App">
    <ScrollToTop/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/netflix-show' element={<NetflixShow/>}/>
     </Routes> 
    <Footer/>
    </div>
    
    </Router>
  );
}

export default App;

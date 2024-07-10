import React from 'react'
import { Routes , Route , Navigate} from 'react-router-dom';
import Home from "./../Pages/Home";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import SearchResultList from "./../Pages/SearchResultList";
import Tours from "./../Pages/Tours";
import TourDetail from "./../Pages/ToursDetail";
import ThankYou from '../Pages/ThankYou';
import About from '../Pages/About';

function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetail/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default Routers

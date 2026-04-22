import React from 'react';
import "../src/App.css";
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Users from './components/Users';
import Cars from './components/Cars';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} >
        <Route path='/products' element={<Products />} />
        <Route path='/users' element={<Users />} />
        <Route path='/cars' element={<Cars />} />
      </Route>
    </Routes>
  )
}
export default App
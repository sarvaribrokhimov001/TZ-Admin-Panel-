import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
        <div className='father__container__of__nav__side'>
          <Sidebar/>

          <div className='navbar__in__the__dashboard'>
            <Navbar/>

            <main>
              <Outlet/>
            </main>
            
          </div>
        </div>
    </div>
  )
}
export default Dashboard
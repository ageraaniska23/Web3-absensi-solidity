import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SideBarEmployee from './components/navbar/SideBarEmployee';
import Sidebar from './components/navbar/Sidebar'
import Home from './components/homepage/Home'
import Footer from './components/footer/Footer'
import EmployeeAbsen from './components/Employee/EmployeeAbsen'

import Employee from './components/Employee/Employee'
import Schedule from './components/schedule/Schedule'
function App() {
  return (
    <div>
      <Router>
        <DynamicSidebar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<EmployeeAbsen />} />
            <Route exact path="/admin/dashboard" element={<Home />} />
            <Route exact path="/admin/schedule" element={<Schedule />} />
            <Route exact path="/admin/employee" element={<Employee />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

function DynamicSidebar() {
  const location = useLocation();

  if (location.pathname === '/') {
    return <SideBarEmployee />;
  } else {
    return <Sidebar />;
  }
}

export default App;

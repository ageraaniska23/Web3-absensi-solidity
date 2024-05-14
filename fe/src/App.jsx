
import './App.css'
import Sidebar from './components/navbar/Sidebar'
import Home from './components/homepage/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Employee from './components/Employee/Employee'
import Schedule from './components/schedule/Schedule'


function App() {
  return (
    <Router>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Employee" element={<Employee />} />
        
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App

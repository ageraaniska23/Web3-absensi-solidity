
import './App.css'
import Sidebar from './components/navbar/Sidebar'
import Home from './components/homepage/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Employee from './components/Employee/Employee'
import Schedule from './components/schedule/Schedule'


function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Employee />}/>
          <Route exact path="/Employee" element={<Home />}/>
          <Route exact path="/E" element={<Schedule />}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App

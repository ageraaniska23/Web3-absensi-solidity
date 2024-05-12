
import './App.css'
import Sidebar from './components/navbar/Sidebar'
import Home from './components/homepage/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Employee from './components/Employee/Employee'


function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Employee" element={<Employee />}/>
        </Routes>
        <Footer />
      </Router>
      {/* <Sidebar />
      <Home />
      <Footer /> */}
    </div>
  )
}

export default App

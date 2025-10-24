import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookAppointment from './components/BookAppointment';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


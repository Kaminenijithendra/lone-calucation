// File: src/App.jsx
// This is the main application file for a React application that uses React Router for navigation.
// It imports the Header component and sets up a basic routing structure.
// The application currently has a single route that renders the Header component when the root path ("/") is accessed.
// The Header component is expected to contain the main navigation or title for the application.
// Importing necessary libraries and components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'; // Import NavigationBar
import HomePage from './Pages/HomePage';  // Import your pages
import ExchangeRatePage from './Pages/ExchangeRatePage'; // Import your pages
import Error404 from './Pages/Error404'; // Import your pages


const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exchange-rate" element={<ExchangeRatePage/>} />
        <Route path='/error' element={<Error404 />} />
        <Route path='/about' element={<div>About Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;



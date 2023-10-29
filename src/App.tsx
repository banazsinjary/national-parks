import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Parks from './Parks';
import ParkPage from './ParkPage';
import './App.css'

const App: React.FC = () => {
  return (
    <>
    <div id="container">
      <Router>
        <Routes>
          <Route path="/" Component={Parks} />
          <Route path="/park/:parkCode" Component={ParkPage} />
        </Routes>
      </Router>
      </div>
      </>
  );
};

export default App;
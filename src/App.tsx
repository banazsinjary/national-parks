import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Parks from './Parks';
import ParkPage from './ParkPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" Component={Parks}></Route>
      <Route path="/park/:parkCode" Component={ParkPage}></Route>
      </Routes>
    </Router>
  );
};

export default App;
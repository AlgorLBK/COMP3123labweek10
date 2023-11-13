// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import DisplayData from './components/DisplayData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/display-data" element={<DisplayData />} />
        <Route path="/" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;

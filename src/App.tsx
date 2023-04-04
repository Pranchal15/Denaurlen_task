import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signin from './Signin';
import Valuation from './Valuation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="valuation" element={<Valuation />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

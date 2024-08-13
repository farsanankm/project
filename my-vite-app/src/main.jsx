import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import Home from './Home';
import Bell from './Bell';
import Write from './Write';
import Acc from './Acc';



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="write" element={<Write />} />
          <Route path="bell" element={<Bell />} />
          <Route path="acc" element={<Acc />} /> i
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

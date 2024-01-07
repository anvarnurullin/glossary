import React from 'react';
import Mindmap from './Mindmap';
import Glossary from './Glossary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mindmap" element={<Mindmap />} />
        <Route path="/glossary" element={<Glossary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

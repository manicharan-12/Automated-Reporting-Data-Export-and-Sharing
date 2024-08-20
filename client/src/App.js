import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import ScheduleManager from './pages/ScheduleManager';
import ExportManager from './pages/ExportManager';
import Navbar from './components/Navbar';

const AppContainer = styled.div`
  background-color: #f4f4f9;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Router>
        <Navbar />
        <AppContainer> 
        <Routes>
          <Route path="/" element={<ScheduleManager />} />
          <Route path="/exports" element={<ExportManager />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;

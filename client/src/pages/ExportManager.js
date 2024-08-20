import React from 'react';
import styled from 'styled-components';
import ExportForm from '../components/ExportForm';

const ExportManagerContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const ExportTitle = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const ExportManager = () => {
  return (
    <ExportManagerContainer>
      <ExportTitle>Export Reports</ExportTitle>
      <ExportForm />
    </ExportManagerContainer>
  );
};

export default ExportManager;

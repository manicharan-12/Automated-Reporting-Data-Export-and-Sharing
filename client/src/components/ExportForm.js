import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const FormInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const FormSelect = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const ExportForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/exports', data);
      alert('Report exported successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to export report');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormInput placeholder="Report Name" {...register('reportName')} />
      <FormSelect {...register('format')}>
        <option value="PDF">PDF</option>
        <option value="Excel">Excel</option>
        <option value="CSV">CSV</option>
      </FormSelect>
      <FormInput placeholder="Recipient Email" {...register('recipient')} />
      <FormInput type="password" placeholder="Password (Optional)" {...register('password')} />
      <SubmitButton type="submit">Export Report</SubmitButton>
    </FormContainer>
  );
};

export default ExportForm;

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
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ScheduleForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('https://automated-reporting-data-export-and.onrender.com/api/schedules', {
        ...data,
        recipients: data.recipients.split(','),
      });
      alert('Schedule created successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to create schedule');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormInput placeholder="Report Name" {...register('reportName')} />
      <FormInput placeholder="Schedule (e.g., Daily, Weekly)" {...register('schedule')} />
      <FormInput placeholder="Recipients (comma separated)" {...register('recipients')} />
      <FormSelect {...register('format')}>
        <option value="PDF">PDF</option>
        <option value="Excel">Excel</option>
        <option value="CSV">CSV</option>
      </FormSelect>
      <SubmitButton type="submit">Create Schedule</SubmitButton>
    </FormContainer>
  );
};

export default ScheduleForm;

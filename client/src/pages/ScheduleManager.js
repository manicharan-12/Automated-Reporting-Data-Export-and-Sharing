import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ScheduleForm from '../components/ScheduleForm';
import { ThreeDots } from 'react-loader-spinner';

const ScheduleManagerContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const ScheduleTitle = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const ScheduleItem = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const ScheduleManager = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const { data } = await axios.get('https://automated-reporting-data-export-and.onrender.com/api/schedules');
        setSchedules(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <ScheduleManagerContainer>
      <ScheduleTitle>Manage Schedules</ScheduleTitle>
      {loading ? (
        <ThreeDots color="#007bff" size={60} />
      ) : (
        schedules.map((schedule) => (
          <ScheduleItem key={schedule._id}>
            <strong>{schedule.reportName}</strong> - {schedule.schedule} - {schedule.format}
          </ScheduleItem>
        ))
      )}
      <ScheduleForm />
    </ScheduleManagerContainer>
  );
};

export default ScheduleManager;

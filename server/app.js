const express = require('express');
const connectDB = require('./config/db');
const reportRoutes = require('./routes/reportRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const exportRoutes = require('./routes/exportRoutes');
const { initializeCronJobs } = require('./utils/cronSetup');
const cors=require('cors')

const app = express();

connectDB();

app.use(express.json());
app.use(cors())

app.use('/api/reports', reportRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/exports', exportRoutes);

initializeCronJobs();

module.exports = app;

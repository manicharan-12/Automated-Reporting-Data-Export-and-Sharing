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
//http://localhost:3000
app.use(
    cors({
      origin: "https://automated-reporting-data-export-and-sharing.vercel.app",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.use('/api/reports', reportRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/exports', exportRoutes);

initializeCronJobs();

module.exports = app;

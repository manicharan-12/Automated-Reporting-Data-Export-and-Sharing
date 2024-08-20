//backend/config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gademanicharan12:automatedReporting@automated-reporting.eccy7t7.mongodb.net/?retryWrites=true&w=majority&appName=Automated-Reporting', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;
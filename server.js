import express from 'express';
import mongoose from 'mongoose';
import videoRoute from './routes/videoRoute.js';
import userRoute from './routes/userRoute.js'
import commentRoute from './routes/commentsRoute.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
const app = express();


// dotenv config
dotenv.config();

// cookie parser

app.use(cookieParser());

// import from .env
const PORT = process.env.PORT || 3000;
const MONGOOSE_URL = process.env.MONGOOSE_URL

// middleware 
app.use(express.json());


// routes
app.use('/api/auth', userRoute);
app.use('/api', videoRoute);
app.use('/api',commentRoute)

// Connect to MongoDB
mongoose
  .connect(MONGOOSE_URL)
  .then(() => {
    console.log('Connected to MongoDB...');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process on connection failure
  });

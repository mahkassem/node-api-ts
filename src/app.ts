// Import express, cors, helmet and morgan
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';
import dotenv from 'dotenv';

// Initialize configuration
dotenv.config();

// Create Express server
const app = express(); // New express instance
const port = process.env['APP_PORT'] || 3000; // Port number
const env = process.env['APP_ENV'] || 'dev'; // Environment

// Express configuration
app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
app.use(morgan(env)); // Enable Morgan
app.use(express.json()); // Enable JSON body parser

// Use routes
app.use('/', router);

// Start Express server
app.listen(port, () => {
  // Callback function when server is successfully started
  console.log(`Server started at http://localhost:${port}`);
});

// Export Express app
export default app;

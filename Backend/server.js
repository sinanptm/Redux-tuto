import express from 'express';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import todoRoutes from './routers/todoRoutes.js';
import noteRoutes from './routers/noteRoutes.js';

dotenv.config();

connectDB();

const port = process.env.NODE_PORT || 4000; 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', todoRoutes);
app.use('/api', noteRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
});

import express from 'express';
import userRouter from './routers/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();

connectDB();

const port = process.env.NODE_PORT;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/users', userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}/`);
});

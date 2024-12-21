import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'
import cors from 'cors';
import { verifyToken } from './middleware/verifyToken.js';
import cookieParser from 'cookie-parser';

import { usersRouter } from './routes/users.route.js';
import { authRouter } from './routes/auth.route.js';
import { assetsRouter } from './routes/assets.route.js';
import { rewardsRouter } from './routes/rewards.route.js';

dotenv.config();
connectDB();

const app = express()

// Allows to parse req.body as json
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN || '*',
        methods: 'GET,POST,DELETE'
    }
));

app.use('/api/auth', authRouter);
app.use('/api/users', verifyToken, usersRouter);
app.use('/api/assets', verifyToken, assetsRouter);
app.use('/api/rewards', verifyToken, rewardsRouter);

const port  = process.env.PORT || 5080;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
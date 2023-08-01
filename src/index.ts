import express from 'express';
import { connectToDatabase } from './database';

const app = express();
const port:number = 3000;

import userRouter from './routes/userRoutes';

app.use(express.json());
app.use('/users', userRouter);

app.use('/', (req, res) => {
    res.status(200).json({
        success: true
    });
});

app.listen(port, () => {
    console.info(`Server is running at http://localhost:${port}`);
    connectToDatabase();
});
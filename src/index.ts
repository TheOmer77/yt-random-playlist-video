import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import router from 'routes';

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

// TODO: Error handler

app.listen(PORT, () => console.info(`Backend is running on port ${PORT}.`));

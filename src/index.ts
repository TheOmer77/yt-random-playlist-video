import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import cors from 'cors';

import router from 'routes';

const PORT = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(cors());
app.use(router);

// TODO: Error handler

app.listen(PORT, () => console.info(`Backend is running on port ${PORT}.`));

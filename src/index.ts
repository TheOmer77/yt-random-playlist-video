import path from 'path';
import express from 'express';
import cors from 'cors';

import router from 'routes';
import { errorHandler } from 'middleware';

const PORT = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.info(`Backend is running on port ${PORT}.`));

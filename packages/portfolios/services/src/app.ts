import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as homeController from './controllers/home';

const app = express();

const baseUrl = '/api';

app.use(cors());
app.use(bodyParser.json({ strict: false }));

app.get(`${baseUrl}/`, homeController.index);

export default app;

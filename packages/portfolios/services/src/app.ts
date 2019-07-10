import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as homeController from './controllers/home';
import * as portfoliosController from './controllers/portfolios';

const app = express();

const baseUrl = '/api';

app.use(cors());
app.use(bodyParser.json({ strict: false }));

app.get(`${baseUrl}/`, homeController.index);
app.post(`${baseUrl}/portfolios`, portfoliosController.createPortfolio);

export default app;

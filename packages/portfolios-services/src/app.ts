import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as homeController from './controllers/home';
import * as portfoliosController from './controllers/portfolios';

const app = express();

const baseUrl = '/portfolios';

app.use(cors());
app.use(bodyParser.json({ strict: false }));

app.post(`${baseUrl}/`, portfoliosController.createPortfolio);
app.get(`${baseUrl}/version`, homeController.index);

export default app;

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as homeController from './controllers/home';
import * as portfoliosController from './controllers/portfolios';
import { IS_OFFLINE } from './config';

const app = express();

const baseUrl = IS_OFFLINE ? '' : '/api-finance';

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.json({
    strict: false
  })
);

app.post(`${baseUrl}/portfolios`, portfoliosController.createPortfolio);
app.get(`${baseUrl}/portfolios`, portfoliosController.getPortfolios);
app.get(`${baseUrl}/portfolios/version`, homeController.index);

export default app;

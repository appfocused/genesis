import { Request, Response } from 'express';
import { dynamoDb, PORTFOLIOS_TABLE } from '../config';
import * as uuid from 'uuid';

import { DataMapper } from '@aws/dynamodb-data-mapper';
import { Portfolio } from '../models/portfolio';
import { resetWarningCache } from 'prop-types';

const mapper = new DataMapper({
  client: dynamoDb
});

export const createPortfolio = (req: Request, res: Response) => {
  const { name, ccy } = req.body;
  const userId = 'vitkon';
  const createdAt = new Date().toISOString();
  const portfolioId = uuid.v4();

  const portfolio = Object.assign(new Portfolio(), {
    pk: portfolioId,
    sk: userId,
    data: name,
    ccy,
    createdAt
  });

  console.log({ body: req.body.name });

  mapper
    .put(portfolio)
    .then(objectSaved => {
      res.json(objectSaved);
    })
    .catch(error => {
      res.status(400).json({ error: 'Could not create portfolio' });
    });
};

export const getPortfolios = async (req: Request, res: Response) => {
  const username = 'vitkon';
  const query = {
    valueConstructor: Portfolio,
    indexName: 'portfoliosGSI',
    keyCondition: { sk: username }
  };
  let result: any[] = [];

  try {
    for await (const item of mapper.query(query)) {
      result.push(item);
    }

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: 'Could not retrieve portfolio' });
  }
};

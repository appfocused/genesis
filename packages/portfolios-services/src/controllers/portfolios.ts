import { Request, Response } from 'express';
import * as uuid from 'uuid';

import { Portfolio } from '../models/portfolio';
import { mapper } from '../config';

const mapDTO = (item: Portfolio) => {
  return {
    id: item.pk,
    name: item.data,
    ccy: item.ccy,
    createdAt: item.createdAt
  };
};

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
      const [response] = [objectSaved].map(mapDTO);
      res.json(response);
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

    res.json(result.map(mapDTO));
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: 'Could not retrieve portfolio' });
  }
};

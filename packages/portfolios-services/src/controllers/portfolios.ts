import { Request, Response } from 'express';
import { dynamoDb, PORTFOLIOS_TABLE } from '../config';
import * as uuid from 'uuid';

import { DataMapper } from '@aws/dynamodb-data-mapper';
import { Portfolio } from '../models/portfolio';

const mapper = new DataMapper({
  client: dynamoDb
});

export const createPortfolio = (req: Request, res: Response) => {
  const { name, ccy } = req.body;
  const userId = 'vitkon';
  const createdAt = new Date().toISOString();
  const portfolioId = uuid.v4();

  // const portfolio = {
  //   ...new Portfolio(),
  //   ...{ pk: portfolioId, sk: userId, data: 'TEST', ccy, createdAt }
  // };

  const portfolio = Object.assign(new Portfolio(), {
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
      console.log('>>>>', error);
      res.status(400).json({ error: 'Could not create portfolio' });
    });
};

// export const createPortfolio = (req: Request, res: Response) => {
//   const { name, ccy } = req.body;

//   const userId = 'vitkon';
//   const timestamp = new Date().toISOString();
//   const id = uuid.v4();

//   const params = {
//     TableName: PORTFOLIOS_TABLE,
//     Item: {
//       id,
//       name,
//       ccy: ccy || 'USD',
//       timestamp,
//       userId
//     }
//   };

//   dynamoDb.put(params, error => {
//     if (error) {
//       console.log(error);
//       res.status(400).json({ error: 'Could not create portfolio' });
//     }

//     res.json({ id, userId, name, ccy, timestamp });
//   });
// };

import { Request, Response } from 'express';
import { dynamoDb, PORTFOLIOS_TABLE } from '../config';
import * as uuid from 'uuid';

export const createPortfolio = (req: Request, res: Response) => {
  const { name, ccy } = req.body;

  console.log(uuid);

  const userId = 'vitkon';
  const timestamp = new Date().toISOString();
  const id = uuid.v4();

  const params = {
    TableName: PORTFOLIOS_TABLE,
    Item: {
      id,
      name,
      ccy: ccy || 'USD',
      timestamp,
      userId
    }
  };

  dynamoDb.put(params, error => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not create portfolio' });
    }

    res.json({ id, userId, name, ccy, timestamp });
  });
};

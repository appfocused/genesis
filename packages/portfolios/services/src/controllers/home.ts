import { Request, Response } from 'express';

export let index = (req: Request, res: Response) => {
  res.send('Portfolio Services v1');
};

import { Request, Response } from 'express';

const index = (req: Request, res: Response) => {
  res.send('Hello Notangles!');
};

export default index;

import type { RequestHandler } from 'express';

export const root: RequestHandler = (req, res) => {
  res.send({ success: true, message: 'Hello world!' });
};

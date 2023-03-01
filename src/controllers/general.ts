import type { RequestHandler } from 'express';

export const root: RequestHandler = (req, res) => {
  // TODO: "How to use this API" page
  res.send({ success: true, message: 'Hello world!' });
};

export const healthz: RequestHandler = (req, res) => res.status(200).send('OK');

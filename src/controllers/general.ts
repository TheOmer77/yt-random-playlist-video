import type { RequestHandler } from 'express';

export const root: RequestHandler = (req, res) => {
  res.render('index', { baseUrl: req.get('host') });
};

export const healthz: RequestHandler = (req, res) => res.status(200).send('OK');

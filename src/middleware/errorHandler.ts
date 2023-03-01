import type { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`<pre>${err.stack}</pre>`);
};

export default errorHandler;

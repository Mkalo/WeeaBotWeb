import * as express from 'express';
export const api: express.Router = express.Router();

api.get('/', (req, res) => {
  res.send('api works');
});

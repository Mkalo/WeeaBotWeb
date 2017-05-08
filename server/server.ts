import { Express } from 'express';
import { Server } from 'http';
import { api } from './routes/api';

import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as bodyParser from 'body-parser';

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

const port: string | number = process.env.PORT || '3000';
app.set('port', port);

const server: Server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));

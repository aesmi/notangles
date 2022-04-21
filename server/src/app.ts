import * as cors from 'cors';
import * as express from 'express';

import index from './index';
import { getAutoController, getSettingsController } from './controllers/index';

const app = express();

app.set('port', process.env.PORT || 3001);

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());
app.use(cors());

app.get('/', index);
app.get('/user/settings/:userID', getSettingsController);
app.post('/auto', getAutoController);

export default app;

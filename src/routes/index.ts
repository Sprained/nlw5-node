import { Router } from 'express';

import setting from './setting';
import user from './user';
import message from './message';

const routes = Router();

routes.use(setting)
routes.use(user);
routes.use(message);

export default routes;
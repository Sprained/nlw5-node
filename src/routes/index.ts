import { Router } from 'express';

import setting from './setting';

const routes = Router();

routes.use(setting)

export default routes;
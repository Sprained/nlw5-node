import { Router } from 'express';

import SettingController from '../app/controllers/SettingController';

const routes = Router();

routes.route('/setting').post(SettingController.create);

export default routes
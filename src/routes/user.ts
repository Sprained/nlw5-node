import { Router } from 'express';

import UserController from '../app/controllers/UserController';

const routes = Router();

routes.route('/user').post(UserController.create);

export default routes
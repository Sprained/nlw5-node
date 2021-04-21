import { Router } from 'express';

import MessageController from '../app/controllers/MessageController';

const routes = Router();

routes.route('/message').post(MessageController.create);
routes.route('/message/:id').get(MessageController.listByUser);

export default routes
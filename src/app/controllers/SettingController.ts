import { Request, Response } from 'express'
import * as yup from 'yup';

import SettingService from '../services/SettingService';

class SettingController {
    async create(req: Request, res: Response): Promise<Response> {
        const schema = yup.object({
            username: yup.string().required('Username é obrigatorio!')
        });

        try {
            await schema.validate(req.body);
        } catch (error) {
            return res.status(400).json({ message: error.errors[0] });
        }

        const { chat, username } = req.body;

        const settingService = new SettingService();

        try {
            await settingService.create({ chat, username });

            return res.status(200).send();
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}

export default new SettingController();
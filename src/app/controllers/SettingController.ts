import { getCustomRepository } from "typeorm";
import { Request, Response } from 'express'

import SettingRepository from "../repositories/SettingRepository";

class SettingController {
    async create(req: Request, res: Response) {
        const { chat, username } = req.body;

        const settingRepository = getCustomRepository(SettingRepository);

        const settings = settingRepository.create({
            chat,
            username
        });

        await settingRepository.save(settings);

        return res.status(200).send();
    }
}

export default new SettingController();
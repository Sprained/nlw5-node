import { getCustomRepository, Repository } from "typeorm";

import Setting from "../entities/Setting";
import SettingRepository from "../repositories/SettingRepository";

interface ISettingCreate {
    chat: boolean,
    username: string
}

class SettingService {
    private settingRepository: Repository<Setting>

    constructor() {
        this.settingRepository = getCustomRepository(SettingRepository);
    }

    async create({ chat, username }: ISettingCreate) {
        const user = await this.settingRepository.findOne({ username });

        if(user) {
            throw new Error('Usuario já existe!');
        }

        const settings = this.settingRepository.create({
            chat,
            username
        });

        await this.settingRepository.save(settings);
        
        return settings;
    }
}

export default SettingService;
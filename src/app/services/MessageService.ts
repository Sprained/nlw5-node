import { getCustomRepository, Repository } from "typeorm";

import Message from "../entities/Message";
import MessageRepository from "../repositories/MessageRepository";

interface IMessageCreate {
    adminId?: number,
    text: string,
    userId: number
}

class MessageService {
    private messageRepository: Repository<Message>

    constructor() {
        this.messageRepository = getCustomRepository(MessageRepository);
    }

    async create({ adminId, text, userId }: IMessageCreate) {
        const message = this.messageRepository.create({
            adminId,
            text,
            userId
        });

        await this.messageRepository.save(message);

        return message;
    }

    async listByUser(userId: number) {
        const list = await this.messageRepository.find({
            where: { userId },
            relations: ['user']
        });

        return list;
    }
}

export default MessageService;
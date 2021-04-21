import { Request, Response } from "express";
import MessageService from "../services/MessageService";

class MessageController {
    async create(req: Request, res: Response) {
        const messageService = new MessageService();

        const { adminId, text, userId } = req.body
        
        const message = await messageService.create({
            adminId, text, userId
        });

        return res.json(message);
    }

    async listByUser(req: Request, res: Response) {
        const id: any = req.params.id;
        const messageService = new MessageService();

        const list = await messageService.listByUser(id);

        return res.json(list);
    }
}

export default new MessageController();
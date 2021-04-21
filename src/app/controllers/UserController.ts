import { Request, Response } from "express";
import * as yup from 'yup';
import UserService from "../services/UserService";

class UserController {
    async create(req: Request, res: Response): Promise<Response> {
        const schema = yup.object({
            email: yup.string()
                .email('Formato do email invalido!')
                .required('Email é obrigatorio!')
        });
        
        const userService = new UserService();

        const user = await userService.create(req.body.email);

        return res.status(201).json(user);
    }
}

export default new UserController();
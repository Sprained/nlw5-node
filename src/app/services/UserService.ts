import { getCustomRepository, Repository } from "typeorm";

import User from "../entities/User";
import UserRepository from "../repositories/UserRepository";

class UserService {
    private userRepository: Repository<User>

    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    async create(email: string) {
        const user = await this.userRepository.findOne({ email });

        if(user) {
            return user;
        }

        const userCreate = this.userRepository.create({
            email
        });

        await this.userRepository.save(userCreate);

        return userCreate;
    }
}

export default UserService;
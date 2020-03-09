import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "../models/User";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    getAll() {
        return this.usersRepository.find();
    }
}
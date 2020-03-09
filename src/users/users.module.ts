import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from './users.service';
import { User } from '../models/User';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [UsersController],
    providers: [
        UsersService
    ]
})
export class UsersModule {}
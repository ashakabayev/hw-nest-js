import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './models/User';
import { Category } from './models/Category';
import { QuestionnairiesModule } from './questionnairies/questionnairies.module';
import { Questionnaire } from './models/Questionnaire';
import { Question } from 'src/models/Question';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '217.182.72.53',
      username: 'asan',
      password: 'xO5A7IvE',
      database: 'asanDB',
      entities: [User, Category, Questionnaire, Question],
      synchronize: true,
    }),
    UsersModule,
    QuestionnairiesModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}

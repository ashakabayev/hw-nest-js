import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../models/Category';
import { Questionnaire } from 'src/models/Questionnaire';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Category, Questionnaire])
    ],
    exports: [TypeOrmModule],
    controllers: [
        CategoryController,
        QuestionnaireController,
    ],
    providers: [
        CategoryService,
        QuestionnaireService,
    ],
})
export class QuestionnairiesModule {

}
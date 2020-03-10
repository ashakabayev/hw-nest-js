import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../models/Category';
import { Questionnaire } from 'src/models/Questionnaire';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';
import { QuestionController } from './question.controller';
import { QuestionService } from 'src/questionnairies/question.service';
import { Question } from 'src/models/Question';

@Module({
    imports: [
        TypeOrmModule.forFeature([Category, Questionnaire, Question])
    ],
    exports: [TypeOrmModule],
    controllers: [
        CategoryController,
        QuestionnaireController,
        QuestionController,
    ],
    providers: [
        CategoryService,
        QuestionnaireService,
        QuestionService,
    ],
})
export class QuestionnairiesModule {

}

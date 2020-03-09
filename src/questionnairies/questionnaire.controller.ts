import { Controller, Body, Post, Get } from "@nestjs/common";
import { QuestionnaireService } from "./questionnaire.service";

@Controller('questionnairies')
export class QuestionnaireController {

    constructor(private readonly questionnairyService: QuestionnaireService) {}

    @Get()
    getAll() {
        return this.questionnairyService.getAll();
    }

    @Post()
    create(@Body() questionnaire) {
        return this.questionnairyService.create(questionnaire);
    }
}
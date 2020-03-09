import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Questionnaire } from "../models/Questionnaire";
import { Repository } from "typeorm";

@Injectable()
export class QuestionnaireService {

    constructor(
        @InjectRepository(Questionnaire)
        private readonly questionnaireRepository: Repository<Questionnaire>
    ) {}

    getAll(criteria = {}) {
        return this.questionnaireRepository.find(criteria);
    }

    create(questionnaire: Questionnaire) {
        return this.questionnaireRepository.save(questionnaire);
    }
}
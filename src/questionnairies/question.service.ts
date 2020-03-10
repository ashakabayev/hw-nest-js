import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Question } from 'src/models/Question';

@Injectable()
export class QuestionService {

  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>
  ) {}

  getById(id: number) {
    return this.questionRepository.findOne(id);
  }

  getQuestions() {
    return this.questionRepository.find();
  }

  createQuestion(question: Question) {
    return this.questionRepository.save(question);
  }

  updateQuestion(id: number, data: Partial<Question>) {
    return this.questionRepository.update(id, data);
  }

  deleteQuestion(id: number) {
    return this.questionRepository.delete(id);
  }
}

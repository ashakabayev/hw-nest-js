import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { QuestionService } from 'src/questionnairies/question.service';

@Controller('questions')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
  ) {
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.questionService.getById(id);
  }

  @Get()
  getQuestions(){
    return this.questionService.getQuestions()
  }

  @Post()
  createCategory(@Body() question) {
    return this.questionService.createQuestion(question);
  }

  @Put(':id')
  editCategory(@Param('id') id: number, @Body() data) {
    return this.questionService.updateQuestion(id, data);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    return this.questionService.deleteQuestion(id);
  }
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Questionnaire } from './Questionnaire';

@Entity({name: 'questions'})
export class Question {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  score: string;

  @ManyToOne(type => Questionnaire, questionnaire => questionnaire.categoryId)
  questionnaire: Questionnaire
}

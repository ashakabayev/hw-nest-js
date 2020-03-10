import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Category } from "./Category";
import { Question } from 'src/models/Question';

@Entity('questionnairies')
export class Questionnaire {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    categoryId: number;

    @ManyToOne(type => Category, category => category.id)
    category: Category;

    @OneToMany(type => Question, question => question.id)
    questions: Promise<Question[]>
}

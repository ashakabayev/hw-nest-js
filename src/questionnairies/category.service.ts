import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "../models/Category";
import { Repository } from "typeorm";

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) {}

    getById(id: number) {
        return this.categoryRepository.findOne(id);
    }

    getCategories() {
        return this.categoryRepository.find();
    }

    createCategory(category: Category) {
        return this.categoryRepository.save(category);
    }

    updateCategory(id: number, data: Partial<Category>) {
        return this.categoryRepository.update(id, data);
    }

    deleteCategory(id: number) {
        return this.categoryRepository.delete(id);
    }
}

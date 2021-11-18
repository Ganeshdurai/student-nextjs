import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Students } from '../Models/students.model'

@Injectable()
export class StudentService {
    constructor(@InjectModel('Students') private readonly student: Model<Students>) { }

    async getAll(){
        return await this.student.find();
    }

    async add(studentsData){
        const createStudent = new this.student(studentsData);
        return await createStudent.save();
    }

    async findbyId(id) {
        return await this.student.findById(id).exec();
        
    }

    async update(student){
        return await this.student.updateOne({_id: student._id}, student)
    }

    async delete(id){
        return await this.student.deleteOne({_id: id})
    }
}
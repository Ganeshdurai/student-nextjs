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
        await createStudent.save();
    }

    async update(student){
        await this.student.updateOne({email: student.email}, student)
    }

    async delete(id){
        await this.student.deleteOne({_id: id})
    }
}
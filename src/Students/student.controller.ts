import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";

import { StudentService } from "src/Services/student.service";


@Controller('students')

export class StudentsController {
    constructor(private service: StudentService) { }
    @Get('all')
    async GetAll() {
        return await this.service.getAll();
    }

    @Post('add')
    async add(@Body() studentData: any) {
        console.log(studentData)
        await this.service.add(studentData);
    }
    @Post('update')
    async update(@Body() studentData: any) {
        await this.service.update(studentData)
    }
    @Delete('delete/:id')
    async delete(@Param('id') id){
        await this.service.delete(id)
    }
}
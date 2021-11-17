import { Controller, Get, Post, Body, Delete, Param, HttpStatus, Res } from "@nestjs/common";
import { StudentService } from "src/Services/student.service";


@Controller('students')

export class StudentsController {
    constructor(private service: StudentService) { }
    @Get('all')
    async GetAll() {
        console.log("check")
        return await this.service.getAll();
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const student = await this.service.findbyId(id);
        return response.status(HttpStatus.OK).json({
            student
        })
    }

    @Post('add')
    async add(@Res() response, @Body() studentData: any) {
        const student = await this.service.add(studentData);
        return response.status(HttpStatus.OK).json({ student })

    }
    @Post('update')
    async update(@Res() response, @Body() studentData: any) {
        await this.service.update(studentData)
        return response.status(HttpStatus.OK).json({ studentData })
    }
    @Delete('delete/:id')
    async delete(@Res() response, @Param('id') id) {
        const student = await this.service.delete(id)
        return response.status(HttpStatus.OK).json({ student })
    }
}
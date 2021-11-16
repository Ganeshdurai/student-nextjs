import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { StudentsController} from './Students/student.controller';
import { studentSchema } from './Schema/Student.schema';
import {StudentService} from './Services/student.service';

@Module({
  imports: [
    
    MongooseModule.forRoot("mongodb://localhost:27017/studentDatabase"),MongooseModule.forFeature([{
      name:'Students',
      schema:studentSchema,
      collection:'Students'
    }])
  ],
  controllers: [AppController, StudentsController],
  providers: [AppService, StudentService],
})
export class AppModule {}
import { Component, OnInit } from '@angular/core';
import {IStudent} from "../model/IStudent";
import {studentDao} from "../model/StudentDao";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent implements OnInit {
  studentDetail: IStudent;
  studentList: IStudent[];

  constructor(private studentService: StudentService) { }


  ngOnInit(): void {
    this.studentList = this.studentService.findAll();
  }

  getStudentDetail(student: IStudent) {
    this.studentDetail = student
  }

  getStudentToEdit(student: IStudent) {

  }
}

import { Component, OnInit } from '@angular/core';
import {IStudent} from "../model/IStudent";

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent implements OnInit {
  studentDetail: IStudent;
  studentList: IStudent[] = [
    {
      id: 1,
      name: 'Luyen',
      mark: 2,
      age: 22,
      image: 'https://phuyen78.com/uploads/default/original/3X/9/e/9e1025e4d9aa1b6d3be4f92671d72ab1d0e76d60.jpeg',
      size: 100,
    },
    {
      id: 2,
      name: 'Tu',
      mark: 7,
      age: 21,
      image: 'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
      size: 100,
    },
    {
      id: 3,
      name: 'Phuoc',
      mark: 9,
      age: 20,
      image: 'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
      size: 100,
    },
    {
      id: 4,
      name: 'Phuc',
      mark: 4,
      age: 25,
      image: 'https://giaitri.vn/wp-content/uploads/2019/07/avatar-la-gi-01.jpg',
      size: 100,
    },
    {
      id: 5,
      name: 'Long',
      mark: 4,
      age: 25,
      image: 'https://i.insider.com/5310d696eab8eac5575385b3?width=600&format=jpeg&auto=webp',
      size: 100,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getStudentDetail(student: IStudent) {
    this.studentDetail = student
  }
}

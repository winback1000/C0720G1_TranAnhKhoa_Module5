import { Injectable } from '@angular/core';
import {IStudent} from "./model/IStudent";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentDao: IStudent[] = [
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
      image: 'data:image/jpeg;base64,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',
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
      mark: 10,
      age: 25,
      image: 'https://anhnendep.net/wp-content/uploads/2018/10/hinh-anh-chibi-nam-cute-lanh-lung-de-thuong-04.png',
      size: 100,
    },
  ];
  constructor() { }

  findAll() {
    return this.studentDao;
  }
  findById(id: number): IStudent {
    return this.studentDao.find((student) => student.id === id)
  }
  createStudent(student: IStudent) {
    this.studentDao.push(student)
  }
  saveStudent(editStudent: IStudent) {
    for(let student of this.studentDao){
      if(student.id === editStudent.id) {
        student.name = editStudent.name;
        student.image = editStudent.image;
        student.mark = editStudent.mark;
        student.age = editStudent.age;
      }
    }
  }


}

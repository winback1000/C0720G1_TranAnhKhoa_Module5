import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {IStudent} from "../../model/IStudent";
import {studentDao} from "../../model/StudentDao";
import {StudentService} from "../../student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  studentForm: FormGroup;
  get name() {
    return this.studentForm.get('name');
  };
  get age() {
    return this.studentForm.get('age');
  }
  get image() {
    return this.studentForm.get('image');
  }
  get mark() {
    return this.studentForm.get('mark');
  }

  editStudent: IStudent;
  tempMark: number;
  constructor(private studentService: StudentService, private router: Router) {
    console.log(this.editStudent);
    if(this.editStudent != null) {
      this.studentForm.setValue(this.editStudent);
    }
  }

  ngOnInit(): void {
      this.studentForm = new FormGroup({
        id: new FormControl('0'),
        name: new FormControl('',[Validators.required,Validators.maxLength(255)]),
        age: new FormControl('',[Validators.required,Validators.min(16), Validators.max(80)]),
        image: new FormControl('',[Validators.required]),
        mark: new FormControl('',[Validators.required,Validators.min(0),Validators.max(10)]),
      })

  }

  submitStudent() {
    let tempStudent: IStudent;
    tempStudent = this.studentForm.value;
    let tempId = tempStudent.id;
    console.log(tempStudent);
      for( let student of studentDao) {
        if(tempId < student.id) {
          tempId = student.id + 1
        }
      tempStudent.id = tempId;
      }
    console.log('tempStudent = '+ tempStudent);
    this.studentService.createStudent(tempStudent);
    this.studentForm.markAsPristine();
    this.studentForm.reset();
    this.tempMark = null;
    this.router.navigateByUrl('student-management');
    }
  updateMark(value: number) {
    this.tempMark = value;
  }
}


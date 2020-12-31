import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IStudent} from "../../model/IStudent";
import {studentDao} from "../../model/StudentDao";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {StudentService} from "../../student.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  editStudent: IStudent;
  sub: Subscription;
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



  tempMark: number;
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = parseInt(paramMap.get('id'));
      this.editStudent = this.studentService.findById(id);
    });
    this.tempMark = this.editStudent.mark;
    this.studentForm = new FormGroup({
      id: new FormControl(this.editStudent.id),
      name: new FormControl(this.editStudent.name,[Validators.required,Validators.maxLength(255)]),
      age: new FormControl(this.editStudent.age,[Validators.required,Validators.min(16), Validators.max(80)]),
      image: new FormControl(this.editStudent.image,[Validators.required]),
      mark: new FormControl(this.editStudent.mark,[Validators.required,Validators.min(0),Validators.max(10)]),
    })
  };

  submitStudent() {
    this.studentService.saveStudent(this.studentForm.value);
    this.router.navigateByUrl('student-management');

  }

  updateMark(value: number) {
    this.tempMark = value;
  }

}

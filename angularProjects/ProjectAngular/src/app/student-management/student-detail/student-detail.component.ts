import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from "../../model/IStudent";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  @Input()
  student: IStudent;

  constructor() { }

  ngOnInit(): void {
  }
  setImage(value) {
    this.student.image = value;
  }

  setMark(value: number) {
    this.student.mark = value;
  }

  setSize(value: number) {
    this.student.size = value;
  }
}
